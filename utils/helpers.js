module.exports = {
  format_date: (date) => date.toLocaleDateString(),
  format_amount: (amount) => parseInt(amount).toLocaleString(),
  get_emoji: () => {
    const randomNum = Math.random();
    let emoji;

    if (randomNum > 0.7) {
      emoji = "💡";
    } else if (randomNum > 0.4) {
      emoji = "💻";
    } else {
      emoji = "⚙️";
    }

    return `<span for="img" aria-label="${emoji}">${emoji}</span>`;
  },
};
