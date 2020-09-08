import { questions } from "@/state";

export const api = {

  async listQuestions() {
    return questions;
  },

  async getQuestion(id) {
    return questions.find(question => question.id == id);
  },

}
