export const HistoryService = {
  getHistoryData() {
    return [
      {
        id: '1000',
        occDt: '2023.11.12 12:33:10',
        equipId: '65-EE-103A',
        issueId: 'TR-RE-23-02899',
        workOder: '800001038743',
        costCenter: '정유3팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1001',
        occDt: '2023.11.08 22:59:07',
        equipId: '25-G-188',
        issueId: 'TR-RE-23-02880',
        workOder: '800001038939',
        costCenter: '정유제품운영팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1002',
        occDt: '2023.11.03 20:12:00',
        equipId: '62-G-702B',
        issueId: 'TR-RE-23-02899',
        workOder: '800001008275',
        costCenter: '정유3팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1003',
        occDt: '2023.11.02 14:33:10',
        equipId: '20-K-134',
        issueId: 'TR-RE-23-02912',
        workOder: '800001033786',
        costCenter: '정유제품운영팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1004',
        occDt: '2023.11.01 17:59:07',
        equipId: '155-EM-204-B',
        issueId: 'TR-RE-23-01953',
        workOder: '800001029124',
        costCenter: 'RFCC팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1005',
        occDt: '2023.10.29 12:12:00',
        equipId: '712-K-152B',
        issueId: 'TR-RE-23-02040',
        workOder: '800001029413',
        costCenter: 'MFC 생산팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1006',
        occDt: '2023.10.23 08:59:07',
        equipId: '120-GM-702A',
        issueId: 'TR-RE-23-02108',
        workOder: '800001030353',
        costCenter: '수처리운영팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1007',
        occDt: '2023.10.18 06:12:08',
        equipId: '654-K-101B',
        issueId: 'TR-RE-23-02211',
        workOder: '800001028635',
        costCenter: 'VGOFCC팀',
        workPlace: 'CMM32L01',
      },
      {
        id: '1008',
        occDt: '2023.10.16 10:32:20',
        equipId: '60-SF-113B',
        issueId: 'TR-RE-23-02765',
        workOder: '800001026743',
        costCenter: '동력팀',
        workPlace: 'CMM40F01',
      },
      {
        id: '1009',
        occDt: '2023.10.12 09:26:07',
        equipId: '47-DG-182B',
        issueId: 'TR-RE-23-02614',
        workOder: '800001026039',
        costCenter: '수처리운영팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1010',
        occDt: '2023.10.05 13:15:00',
        equipId: '62-G-702B',
        issueId: 'TR-RE-23-02579',
        workOder: '800001007275',
        costCenter: '정유탈황1팀',
        workPlace: 'CMM270S12',
      },
      {
        id: '1010',
        occDt: '2023.10.02 10:03:26',
        equipId: '20-K-134',
        issueId: 'TR-RE-23-02032',
        workOder: '800001030326',
        costCenter: '정유제품운영팀',
        workPlace: 'CMM40S02',
      },
      {
        id: '1011',
        occDt: '2023.10.01 17:59:07',
        equipId: '155-EM-204-B',
        issueId: 'TR-RE-23-01953',
        workOder: '800001029124',
        costCenter: 'RFCC팀',
        workPlace: 'CMM40S02',
      },
    ];
  },

  getHistoryMini() {
    return Promise.resolve(this.getHistoryData().slice(0, 5));
  },

  getHistorySmall() {
    return Promise.resolve(this.getHistoryData().slice(0, 10));
  },

  getHistory() {
    return Promise.resolve(this.getHistoryData());
  },
};
