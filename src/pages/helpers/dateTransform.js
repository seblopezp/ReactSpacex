export const dateTransform = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const fullDate = `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
    return fullDate;
  };