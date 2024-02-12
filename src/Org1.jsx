import { useDevicesList } from "./allHooks";

export const Org1 = () => {
  const { data: devicesListData, isLoading: devicesListLoading } =
    useDevicesList(1);
  return (
    <div>
      <h1>
        <strong>Org1</strong>
      </h1>
      {/* show device list in table. ID should have hyperlink */}
      {devicesListLoading ? (
        <>Loading...</>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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
