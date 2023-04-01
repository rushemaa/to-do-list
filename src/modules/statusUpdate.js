export default function changeStatus() {
  const editt = [];
  if (localStorage.getItem('lists')) {
    editt.push(...JSON.parse(localStorage.getItem('lists')));
  }
  editt.forEach((task) => {
    const check = document.getElementById(`status-${task.index}`);
    check.addEventListener('change', () => {
      const neww = editt.map((p) => {
        if (p.index === task.index) {
          return {
            description: p.description,
            completed: !p.completed,
            index: p.index,
          };
        }
        return p;
      });
      localStorage.setItem('lists', JSON.stringify(neww));
      changeStatus();
    });
  });
}
