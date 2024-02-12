import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

/**
 * @param {Object} args - arguments to be passed to the API
 * @param {import("@tanstack/react-query").UseQueryOptions} options - options to be passed to the useQuery hook
 *
 * @returns {import("@tanstack/react-query").UseQueryResult} - returns the query response
 */
export const useDevicesList = (orgId, options = {}) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["devices", orgId],
    queryFn: () => {
      return fetch("/api/devices?orgId=" + orgId).then((res) => res.json());
    },
    staleTime: 1000000,
    ...options,
  });

  useEffect(() => {
    if (parseInt(orgId) === 0 && query.data && query.data.length > 0) {
      // start preparing a map where key is ordId and value is list of devices for that org
      const orgIdDeviceListMap = {};

      for (let i = 0; i < query.data.length; i++) {
        const device = query.data[i];
        if (!orgIdDeviceListMap[device.org]) {
          orgIdDeviceListMap[device.org] = [];
        }
        orgIdDeviceListMap[device.org].push(device);
      }

      // set query data for all orgs in the map
      for (const orgId in orgIdDeviceListMap) {
        queryClient.setQueryData(
          ["devices", parseInt(orgId)],
          orgIdDeviceListMap[orgId]
        );
      }
    }
  }, [orgId, queryClient, query.data]);
  return query;
};

export const useDevicesCount = (orgId) =>
  useDevicesList(orgId, {
    select: (data) => data.length,
  });
