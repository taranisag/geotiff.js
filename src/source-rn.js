export function makeBufferSource(arrayBuffer) {
  return {
    async fetch(offset, length) {
      return arrayBuffer.slice(offset, offset + length);
    },
  };
}
