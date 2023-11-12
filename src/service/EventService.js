export const EventService = {
  getEventData() {
    return [
      {
        id: '1000',
        team: 'PE 생산팀',
        system: 'CMS',
        alertStatus: '대기',
        occDt: '2023-11-10 23:11:43',
        equipId: '732-G-2032A',
        equipStatus: 'Run',
        alertType: '-',
        importance: 'High',
        report: '800000112459',
      },
      {
        id: '1001',
        team: '정유탈황1팀',
        system: 'IOW',
        alertStatus: '조치중',
        occDt: '2023-11-01 11:34:19',
        equipId: '67-F-101',
        equipStatus: 'Run',
        alertType: '계기오류',
        importance: 'Low',
        report: '800000109241',
      },
      {
        id: '1002',
        team: '정유제품운영팀',
        system: 'CMS',
        alertStatus: '조치중',
        occDt: '2023-10-15 10:25:33',
        equipId: '20-K-702A',
        equipStatus: 'Run',
        alertType: '설비이상',
        importance: 'High',
        report: '800000101942',
      },
      {
        id: '1003',
        team: '정유4팀',
        system: 'IOW',
        alertStatus: '분석',
        occDt: '2023-10-14 02:41:09',
        equipId: '77-E-105A',
        equipStatus: 'Run',
        alertType: '모니터링',
        importance: 'High',
        report: '800000101368',
      },
      {
        id: '1004',
        team: 'HCR팀',
        system: 'CMS',
        alertStatus: '완료',
        occDt: '2023-10-12 13:22:58',
        equipId: '512-G-104A',
        equipStatus: 'Run',
        alertType: '계기오류',
        importance: 'High',
        report: '800001008728',
      },
      {
        id: '1005',
        team: '방향족생산2팀',
        system: 'CMS',
        alertStatus: '완료',
        occDt: '2023-10-02 09:24:55',
        equipId: '203-G-1098',
        equipStatus: 'Run',
        alertType: '기준값 변경 필요',
        importance: 'Low',
        report: '800001002182',
      },
    ];
  },

  getEventMini() {
    return Promise.resolve(this.getEventData().slice(0, 5));
  },

  getEventSmall() {
    return Promise.resolve(this.getEventData().slice(0, 10));
  },

  getEvent() {
    return Promise.resolve(this.getEventData());
  },
};
