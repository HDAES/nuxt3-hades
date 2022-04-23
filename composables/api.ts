interface Data {
  imageBase64: string;
  verify: string;
}

interface Params {
  a: string;
}

export async function getSaying() {
  return await http({
    url: "/admin/sec/user/verifyCode",
    method: "GET",
  });
}
