export const PredictionService = {
  getPredictionData() {
    return [
      {
        id: '1000',
        predictDay: '23-10-22 12:11:45',
        pType: 'Comp. Surge',
        grade: '보통',
        pRate: '94',
        pModel: 'C_R01',
        pFeature: 'Shaft Vibration, Motor Current, IGV Position, Pressure ',
      },
    ];
  },

  getPredictionMini() {
    return Promise.resolve(this.getPredictionData().slice(0, 5));
  },

  getPredictionSmall() {
    return Promise.resolve(this.getPredictionData().slice(0, 10));
  },

  getPrediction() {
    return Promise.resolve(this.getPredictionData());
  },
};
