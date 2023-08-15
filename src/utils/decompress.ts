import * as fflate from 'fflate';

export const decompress = (compressedBase64: string): string => {
  // Decode the base64 string
  const compressedData = atob(compressedBase64);

  // Convert the compressed data to Uint8Array
  const uint8Array = new Uint8Array(compressedData.split('').map((char) => char.charCodeAt(0)));

  // Decompress the Uint8Array using fflate
  const decompressedData = fflate.gunzipSync(uint8Array);

  // Convert the decompressed data to a base64 string
  const decompressedBase64 = btoa(String.fromCharCode.apply(null, decompressedData as any));

  return decompressedBase64;
};
