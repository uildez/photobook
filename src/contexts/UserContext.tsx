import { createContext, ReactNode, useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import api from "../services/api";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
  modalInfo: any;
  modal: (newState: any) => void;
  photo: any;
  setPhoto: (arg0: any) => void;
  barSearch: any;
  setBarSearch: (newState: boolean) => void;
  searchWord: any;
  setSearchWord: (arg0: any) => void;
  isFetching: boolean;
  setIsFetching: (newState: boolean) => void;
  count: number;
  setCount: (newState: number) => void;
  countSearch: number;
  setCountSearch: (newState: number) => void;
  setModalInfo: (arg0: any) => void;
  handleSearchChange: (newState: boolean) => void;
};

const initialState = {
  isOpenModal: false,
  setIsOpenModal: () => {
    {
    }
  },
  handleSearchChange: () => {},
  modal: () => {},
  photo: "",
  setPhoto: () => {},
  modalInfo: "",
  setModalInfo: () => {},
  searchPhotos: () => {},
  barSearch: "",
  setBarSearch: () => {
    {
    }
  },
  searchWord: "",
  setSearchWord: () => {
    {
    }
  },
  isFetching: false,
  setIsFetching: () => {
    {
    }
  },
  count: 20,
  setCount: () => {
    {
    }
  },
  countSearch: 20,
  setCountSearch: () => {
    {
    }
  },
};

export const UserContext = createContext<UserContextType>(initialState);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialState.isOpenModal);
  const [barSearch, setBarSearch] = useState(initialState.isOpenModal);
  const [photo, setPhoto] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [isFetching, setIsFetching] = useState(initialState.isFetching);
  const [count, setCount] = useState(initialState.count);
  const [countSearch, setCountSearch] = useState(initialState.count);
  const [searchWord, setSearchWord] = useState(initialState.searchWord);

  useEffect(() => {
    const loadPhotos = async () => {
      setIsFetching(true);
      await api
        .get("curated?page=1&per_page=" + count)
        .then((response) => {
          setPhoto(response.data.photos);
          console.log(response.data.photos);
        })
        .then(() => {
          setIsFetching(false);
        })
        .catch((error) => console.log(error));
    };

    loadPhotos();
  }, [count]);


  function handleSearchChange(e: any) {
    setSearchWord(e);
    function searchPhotos() {
      setIsFetching(true);
      api
        .get("search?query=" + e + "&per_page=" + countSearch)
        .then((response) => {
          setBarSearch(response.data.photos);
          setIsFetching(false);
        })
        .catch((error) => console.log(error));
    };
    searchPhotos();
  }  


  function modal(photo: any) {
    setIsOpenModal(true);
    setModalInfo(photo.photo);
    window.scrollTo(0, 50);
  }

  return (
    <UserContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        handleSearchChange,
        barSearch,
        setBarSearch,
        photo,
        setPhoto,
        isFetching,
        setIsFetching,
        count,
        setCount,
        countSearch,
        setCountSearch,
        modal,
        modalInfo,
        setModalInfo,
        searchWord,
        setSearchWord
      }}
    >
      {children}
      {isOpenModal && <Modal />}
    </UserContext.Provider>
  );
};
