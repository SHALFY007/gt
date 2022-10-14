export default {
  namespaced: true,
  state: {
    meetings: [
      {
        id: 0,
        // 0 - не завершено, 1 - завершено положительно, 2 - завершено отрицательно
        isCompleted: 1,
        date: '20.02.2021 | 14:06',
        spicker: 'radik_Khojabekyan',
        topic: 'Sandrexa_Domina амоатс вствот свост вслвс вослвь свотсвь',
        desc: 'С другой стороны сложившаяся структура организации представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным .',
      },
      {
        id: 1,
        isCompleted: 2,
        date: '27.02.2021 | 15:06',
        spicker: 'padik_Khojabekyan',
        topic: 'Sandrexa свост вслвс вослвь свотсвь',
        desc: 'С другой стороны сложившаяся структура  в отношении поставленных задач. С другой стороны  количественный рост и сферанашей активности представляет собой интересный эксперимент  направлений  развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции  широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует...',
      },
      {
        id: 2,
        isCompleted: 0,
        date: '25.02.2021 | 12:06',
        spicker: 'huyadik_Khojayan',
        topic: 'Sandrexa свост вслвс вослвь свотсвь',
        desc: 'С другой стороны сложившаяся структура  в отношении поставленных задач. С другой стороны  количественный собой интересный эксперимент  направлений  развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции  широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует...',
      },
    ],
    // Выбранное заседание, выбирается само мутацией setCurrentMeeting
    currentMeeting: null,
    // Информация конкретного голосования
    currentVoteData: {
      // id ответа, за который отдал голос (если проголосовал), если не проголосовал - значение null; 0 - голос против, 1 - голос нейтральный, 2 - голос за
      currentVote: null,
      partiesList: [
        {
          id: 0,
          name: 'Партия1',
          members: [
            {
              nickname: 'Name_Surname',
              id: 0,
              vote: 0,
            }
          ]
        }
      ]
    }
  },
  mutations: {
    setCurrentMeeting: function(state, obj) {
      state.currentMeeting = obj
    },
    setMeetings: function(state, data) {
      state.meetings = data
    },
    setOneMeeting: function(state, data) {
      const index = state.meetings.findIndex(item => item.id == data.id)
      if (index >= 0)      
        state.meetings[index] = data
      else
        state.meetings.push(data);
    },
    setCurrentVoteData: function(state, data) {
      state.currentVoteData = data;
    }
  },
  actions: {
  },
  modules: {
  }
}
