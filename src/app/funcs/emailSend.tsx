import emailjs from "@emailjs/browser";

export const emailSendFunc = async (
  templateParams: {},
  serviceId: string | undefined,
  templateId: string | undefined,
  publicKey: string | undefined
): Promise<boolean> => {
  if (!serviceId || !templateId || !publicKey) {
    console.error("Some of the emailJS parameters are missing!");
    return false;
  }
  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    });
    console.log("SUCCESS!", response.status, response.text);
    return true;
  } catch (error) {
    console.log("FAILED...", error);
    return false;
  }
};
