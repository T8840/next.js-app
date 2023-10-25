import sampleData from "../data-donor.json";

const useReport = () => {
  const dataSource = sampleData.data.map((item) => {
    const namaBulan = `${item.nama_bulan}`.split("/")[0];

    return {
      ...item,
      formattedNamaBulan: namaBulan,
    };
  });

  return {
    source: dataSource,
  };
};

export default useReport;
