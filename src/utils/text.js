export function fitTextToBox(
  textObject,
  value,
  maxWidth,
  baseFontSize = 20,
  minFontSize = 12,
) {
  if (!textObject) return;

  textObject.setText(value);
  textObject.setFontSize(baseFontSize);

  let size = baseFontSize;

  while (textObject.width > maxWidth && size > minFontSize) {
    size -= 1;
    textObject.setFontSize(size);
  }
}
