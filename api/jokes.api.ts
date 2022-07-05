import apiClient from ".";

type JokeOfTheDayType = {
  success: {
    total: number;
  };
  contents: {
    jokes: {
      description: string;
      language: string;
      background: string;
      category: string;
      date: string;
      joke: {
        title: string;
        lang: string;
        length: string;
        clean: string;
        racial: string;
        date: string;
        id: string;
        text: string;
      };
    }[];
    copyright: string;
  };
};

const url = "https://api.jokes.one";

const jokesApi = {
  async getDailyJokes(): Promise<JokeOfTheDayType> {
    return (await apiClient.get(`${url}/jod`)).data;
  },
};

export default jokesApi;
