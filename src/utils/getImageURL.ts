/**
 *
 * @param url
 * @returns http://localhost:1337/public/uploads/image.svg
 */
export const getIageURL = (url: string) =>
  `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
