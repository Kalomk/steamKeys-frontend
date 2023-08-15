import * as fflate from 'fflate';

export const compress = (base64Image: string) => {
  const base64Data = base64Image.split(',')[1]; // Extract the base64 data from the data URL
  const uint8Array = new Uint8Array(
    atob(base64Data)
      .split('')
      .map((char) => char.charCodeAt(0))
  );

  // Compress the Uint8Array using fflate
  const compressedData = fflate.gzipSync(uint8Array);

  // Convert the compressed data back to base64
  const compressedBase64 = btoa(String.fromCharCode.apply(null, compressedData as any));
  return compressedBase64;
};
