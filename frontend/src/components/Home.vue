<template>
  <div class="home">
    <div class="header">
      <h1>Project Name</h1>
      <div class="search">Search bar</div>
      <button>Log in</button>
      <button>Register</button>
    </div>
    <div class="body">
      <div class="sidebar">
        <ul>
          <li>Questions</li>
          <li>Tags</li>
          <li>Users</li>
        </ul>
      </div>
      <div class="content">
        <div class="title">
          <div class="container">
            <h2>Questions</h2>
            <button>Ask a question</button>
          </div>
          <div>{{ numQuestions.toLocaleString() }} questions</div>
        </div>
        <div class="article">
          <div v-for="question in questions" :key="question.id" class="question">
            <h3>{{ question.title }}</h3>
            <p>{{ question.description }}</p>
            <div v-for="tag in question.tags" :key="tag.id" class="tag">
              #{{ tag.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      numQuestions: 1000,
      questions: [
        {
          id: 0,
          title: "Question 1 title",
          description: "Question 1 description",
          tags: [
            {
              id: 0,
              text: "tag1",
            },
            {
              id: 1,
              text: "tag2",
            },
          ],
        },
        {
          id: 1,
          title: "Question 2 title",
          description: "Question 2 description",
          tags: [
            {
              id: 1,
              text: "tag2",
            },
          ],
        },
      ],
    }
  }
}
</script>

<style src="@/css/home.css"></style>
