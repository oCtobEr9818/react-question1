import { Tab } from "rizzui";
import Question1 from "./task/question-1/index";
import Question3 from "./task/question-3/index";
import Count from "./task/question-5/index";
import SearchBox from "./task/question-6/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tab>
        <Tab.List>
          <Tab.ListItem className="tab-list-item">question 1</Tab.ListItem>
          <Tab.ListItem className="tab-list-item">question 2</Tab.ListItem>
          <Tab.ListItem className="tab-list-item">question 3</Tab.ListItem>
          <Tab.ListItem className="tab-list-item">question 4</Tab.ListItem>
          <Tab.ListItem className="tab-list-item">question 5</Tab.ListItem>
          <Tab.ListItem className="tab-list-item">question 6</Tab.ListItem>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <Question1 />
          </Tab.Panel>
          <Tab.Panel>詳情請看code</Tab.Panel>
          <Tab.Panel>
            <Question3 />
          </Tab.Panel>
          <Tab.Panel>詳情請看code</Tab.Panel>
          <Tab.Panel>
            <Count />
          </Tab.Panel>
          <Tab.Panel>
            <SearchBox />
          </Tab.Panel>
        </Tab.Panels>
      </Tab>
    </div>
  );
}

export default App;
