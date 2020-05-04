registerPaint(
  'excel-border',
  class {
    static get inputProperties() {
      return ['--primary-color'];
    }

    paint(ctx, { width, height }, props) {
      const primaryColor = props
        .get('--primary-color')
        .toString()
        .replace(/"/g, '');
      ctx.lineWidth = 3;
      ctx.strokeStyle = primaryColor;

      ctx.beginPath();
      ctx.moveTo(0, 0);

      ctx.lineTo(width, 0);
      ctx.lineTo(width, height - 8);
      ctx.moveTo(width - 8, height);
      ctx.lineTo(0, height);
      ctx.lineTo(0, 0);

      ctx.stroke();

      ctx.fillStyle = primaryColor;
      ctx.fillRect(width - 6, height - 6, 18, 18);
    }
  }
);
