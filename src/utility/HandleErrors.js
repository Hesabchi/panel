import { message } from "antd";
export function HandleErrors(err) {
  try {
    if (err.response) {
      if (err.response.data.message && !err.response.data.success) {
        message.error(err.response.data.message);
      } else {
        throw err;
      }
    } else if (err.message == "Canceled by user") {
      message.error("درخواست تویط کاربر لغو شد.");
    } else {
      throw err;
    }
  } catch (error) {
    message.error("خطایی پیش آمده، لطفا دوباره تلاش کنید...");
  }
}
