import { HttpResponse, delay, http } from "msw";

export const handlers = [
  http.get("/api/devices", async ({ request, params, cookies }) => {
    const url = new URL(request.url);
    const orgId = url.searchParams.get("orgId");
    console.info("orgId: ", orgId);

    await delay(1000);
    let allDevices = [
      { id: 1, name: "Device 1", org: 1 },
      { id: 2, name: "Device 2", org: 2 },
      { id: 3, name: "Device 3", org: 1 },
      { id: 4, name: "Device 4", org: 1 },
      { id: 5, name: "Device 5", org: 3 },
      { id: 6, name: "Device 6", org: 1 },
      { id: 7, name: "Device 7", org: 2 },
      { id: 8, name: "Device 8", org: 1 },
      { id: 9, name: "Device 9", org: 3 },
    ];
    if (parseInt(orgId) !== 0) {
      allDevices = allDevices.filter((device) => device.org === Number(orgId));
    }
    return HttpResponse.json(allDevices);
  }),
];
