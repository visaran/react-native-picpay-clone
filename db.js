module.exports = () => {
  const data = { suggestions: [] };

  for (let i = 0; i < 10; i++) {
    data.suggestions.push({
      id: String(Math.random()),
      label: `Label${i}`,
    });
  }

  return data;
};
