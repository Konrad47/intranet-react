const url = "http://localhost:5001/tutorials";

export const fetchTutorials = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const fetchLastTutorial = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.slice(-1).pop();
};

export const fetchTutorial = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
};

export const addTutorial = async (tutorial) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(tutorial),
  });
};

export const deleteTutorial = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};

export const editTutorial = async (id, editTutorial) => {
  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(editTutorial),
  });
};
