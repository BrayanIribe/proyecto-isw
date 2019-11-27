<template>
  <div class='quiz'>
    <template v-if='actual < iQuestions.length'>
      <div class='questions'>
        <div
          v-for='(question, i) in iQuestions'
          v-bind:key='"q"+i'
          v-bind:class='{
            "selected":actual === i,
            "success":actual > i && question.answer === question.correct,
            "error":actual > i && question.answer !== question.correct
        }'
        >{{ i + 1 }}</div>
      </div>
      <div class='question-body'>
        <div class='title'>{{this.question.title}}</div>
        <div
          v-for='(answer, i) in this.question.answers'
          v-bind:key='"a"+i'
          class='answer'
          v-on:click='pick(i)'
        >
          <font-awesome-icon icon='chevron-right'></font-awesome-icon>
          {{ answer }}
        </div>
      </div>
    </template>
    <template v-else>
      <div class='status'>
        <template v-if='approve'>
          <div class='badge mb-3'>
            <font-awesome-icon icon='check'></font-awesome-icon>
          </div>
          <h1>Felicidades 🎉! Eres muy inteligente 🧠, sigue así!</h1>
        </template>
        <template v-else>
          <div class='badge mb-3'>
            <font-awesome-icon icon='times' v-if='!approve'></font-awesome-icon>
          </div>
          <h1>Chalee! No pasaste el Quiz! 😬😿</h1>
        </template>
        <h2>{{ this.aciertos }}/{{this.iQuestions.length}}</h2>
      </div>
      <div class='answers'>
        <div
          v-for='(question, i) in this.iQuestions'
          v-bind:key='"qa"+i'
          class='question'
        >
          <h4>{{ i + 1 }} - {{ question.title }}</h4>
          <p v-if='question.answer !== question.correct' class='text-danger'>
            <font-awesome-icon icon='times'></font-awesome-icon>
            {{ question.answers[question.answer] }}
          </p>
          <p class='text-primary'>
            <font-awesome-icon icon='check'></font-awesome-icon>
            {{ question.answers[question.correct] }}
          </p>
        </div>
      </div>
      <b-button
        class='mt-5'
        variant='primary'
        block
        @click='restart'
      >¡Quiero volver a hacer el Quiz!</b-button>
    </template>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  name: 'Quiz',
  data() {
    return {
      actual: 0,
      iQuestions: []
    }
  },
  computed: {
    question() {
      return this.iQuestions[this.actual]
    },
    aciertos() {
      let answers = 0
      this.iQuestions.map((question) => {
        if (question.answer === question.correct) answers++
      })
      return answers
    },
    approve() {
      let qualif = this.aciertos / this.iQuestions.length
      return qualif > 7
    }
  },
  methods: {
    restart() {
      this.iQuestions.map((question) => {
        question.answer = -1
      })
      this.actual = 0
    },
    pick(i) {
      this.question.answer = i
      this.actual++
    }
  },
  created() {
    this.questions.map((question) => {
      question = JSON.parse(JSON.stringify(question))
      question.answer = -1
      this.iQuestions.push(question)
    })
  }
}
</script>

<style lang="scss" scoped>
.answers {
  width: 100%;
  height: 60%;
  overflow-y: scroll;

  h4 {
    font-size: 140%;
    font-weight: normal;
  }

  p {
    font-size: 120%;
    padding-left: 35px;
    margin-bottom: 10px;
  }
}
.status {
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .badge {
    width: 10vh;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5vh;
    background-color: #e74c3c;
    border-radius: 10vh;
  }

  h1 {
    font-weight: lighter;
  }
}
.quiz {
  width: 100%;
  height: 600px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.question-body {
  margin-top: 3rem;
  width: 100%;
  .title {
    font-size: 250%;
    margin-bottom: 2rem;
  }
  .answer {
    font-size: 130%;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
      transform: translateX(20px);
      color: #2980b9;
    }
  }
}

.questions {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  div {
    width: 7vh;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
    user-select: none;
    border-radius: 8vh;
    transition: 0.25s;
    font-size: 150%;
    font-weight: lighter;

    &.selected {
      background-color: #3498db;
      border-color: #3498db;
      color: white;
    }

    &.error {
      background-color: #e74c3c;
      border-color: #e74c3c;
      color: white;
    }

    &.success {
      background-color: #2ecc71;
      border-color: #2ecc71;
      color: white;
    }
  }
}
</style>