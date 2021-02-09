const getDateInterval = (numberOfDays: number) => {
    const today = new Date();
    const endDate = today.toISOString().slice(0, 10);
    today.setDate(today.getDate() - numberOfDays);
    const startDate = today.toISOString().slice(0, 10);

    return { startDate, endDate };
};

export default getDateInterval;
