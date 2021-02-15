//just make an audio reducer here
//adds audio to state
//action
const GET_AUDIO = 'GET_AUDIO'
const SWITCH_CHART = 'SWITCH_CHART'
const MIC_CHANGE = 'MIC_CHANGE'

export const setAudio = audio => {
  return {
    type: GET_AUDIO,
    audio
  }
}

export const switchChart = chart => {
  return {
    type: SWITCH_CHART,
    chart
  }
}

export const micChange = () => {
  return {
    type: MIC_CHANGE
  }
}

const initialState = {audio: null, chartType: 'Oscilloscope', mic: false}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUDIO: {
      return {...state, audio: action.audio}
    }
    case SWITCH_CHART: {
      return {...state, chartType: action.chart}
    }
    case MIC_CHANGE: {
      return {...state, mic: !this.state.mic}
    }
    default:
      return state
  }
}
