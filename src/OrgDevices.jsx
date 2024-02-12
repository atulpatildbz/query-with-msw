import { useDevicesCount, useDevicesList } from "./allHooks";
import PropTypes from "prop-types";

export const OrgDevices = ({ orgNumber }) => {
  const {
    data: devicesListData,
    isLoading: devicesListLoading,
    isFetching: devicesListFetching,
  } = useDevicesList(orgNumber);
  const {
    data: devicesCountData,
    isLoading: devicesCountLoading,
    isFetching: devicesCountFetching,
  } = useDevicesCount(orgNumber);
  console.info("devicesCountData: ", devicesCountData);

  return (
    <div>
      <h1>
        <strong>Org{orgNumber}</strong>
      </h1>
      {/* show device list in table. ID should have hyperlink */}
      {devicesListLoading ? (
        <>Loading...</>
      ) : (
        <table
          className={`min-w-full divide-y divide-gray-200 ${
            // if fetching, add animate-pulse, and change color to red
            devicesListFetching ? "animate-pulse" : ""
          }`}
        >
          <thead
            className={`${devicesListFetching ? "bg-red-100" : "bg-gray-50"}`}
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Org
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {devicesListData.map((device) => (
              <tr key={device.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.org}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

OrgDevices.propTypes = {
  orgNumber: PropTypes.string.isRequired,
};
