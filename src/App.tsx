import React, { FC, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import EmailItems from "./components/EmailItemsList/EmailItemsList";
import EmailBody from "./components/EmailBody/EmailBody";
import Filter from "./components/Filter/Filter";
import { EmailBodyType, EmailItemType } from "./types/EmailTypes";
import { useLocalStorage } from "./utils/useLocalStorage";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";

interface AppProps {}

const App: FC<AppProps> = ({}: AppProps): ReactElement => {
  const [openView, setOpenView] = useState<boolean>(false);
  // array of email objects
  const [items, setItems] = useState<EmailItemType[]>([]);
  // array of email objects with body
  const [bodyItem, setBodyItem] = useState<EmailBodyType>();
  const [id, setId] = useState<string>("");
  const [pageNo, setPageNo] = useState<number>(1);

  // filters states
  const [readList, setReadList] = useLocalStorage("read", []);
  const [favList, setFavList] = useLocalStorage("fav", []);

  // read, unread, favs
  const [readFilter, setReadFilter] = useState<boolean>(false);
  const [unreadFilter, setUnreadFilter] = useState<boolean>(false);
  const [favFilter, setFavFilter] = useState<boolean>(false);

  // fetch email items list
  useEffect(() => {
    axios
      .get(`https://flipkart-email-mock.vercel.app/?page=${pageNo}`)
      .then((res) => {
        const emails = res.data.list;
        setItems(emails);
      })
      .catch();
  }, [pageNo]);

  const emailOpenClickHandler = (id: string) => {
    setOpenView(true);
    axios
      .get(`https://flipkart-email-mock.vercel.app/?id=${id}`)
      .then((res) => {
        const result = res.data;
        setBodyItem(result);
      })
      .catch();
    setId(id);
    if (!readList.includes(id)) setReadList([...readList, id]);
  };

  const getOpenedEmail = () => {
    const i = items.find((x) => x.id === id);
    return i;
  };

  const markAsFav = (id: string) => {
    console.log(favList, id);
    if (!favList.includes(id)) setFavList([...favList, id]);
    console.log(favList);
  };
  const readClickHandler = () => {
    setReadFilter(!readFilter);
    setUnreadFilter(false);
    setFavFilter(false);
  };
  const unreadClickHandler = () => {
    setReadFilter(false);
    setUnreadFilter(!unreadFilter);
    setFavFilter(false);
  };
  const favClickHandler = () => {
    setReadFilter(false);
    setUnreadFilter(false);
    setFavFilter(!favFilter);
  };
  const getEmailsList = (): EmailItemType[] => {
    let result = [...items];
    // console.log("u:" + unreadFilter, "r:" + readFilter, "f:" + favFilter);
    if (readFilter) {
      // console.log("read clicked");
      return result.filter((x) => readList.includes(x.id));
    }
    if (unreadFilter) {
      // console.log("unread clicked");
      return result.filter((x) => !readList.includes(x.id));
    }
    if (favFilter) {
      // console.log("fav clicked");
      return result.filter((x) => favList.includes(x.id));
    }
    return result;
  };

  const handlePageClick = (pageNo: number) => {
    setPageNo(pageNo);
  };

  return (
    <div className="App">
      <Filter
        readClickHandler={readClickHandler}
        unreadClickHandler={unreadClickHandler}
        favClickHandler={favClickHandler}
        unreadFilter={unreadFilter}
        readFilter={readFilter}
        favFilter={favFilter}
      />
      <div className="center-container">
        <EmailItems
          items={getEmailsList()}
          emailOpenClickHandler={emailOpenClickHandler}
          readList={readList}
          favList={favList}
        />
        <EmailBody
          openView={openView}
          email={getOpenedEmail()}
          openedEmail={bodyItem}
          markAsFav={markAsFav}
        />
      </div>
      <Pagination handlePageClick={handlePageClick} />
    </div>
  );
};

export default App;
