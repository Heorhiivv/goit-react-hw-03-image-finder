import React, {PureComponent} from "react"

import css from "../App/App.module.css"
import articlesApi from "../../services/articlesApi.js"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

import Searchbar from "../Searchbar/Searchbar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"

class App extends PureComponent {
  state = {
    gallery: [],
    page: 1,
    loading: false,
    modalIsOpen: false,
    query: "",
    error: null,
    largeImageURL: "",
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.query
    const currentPage = this.state.query
    if (prevPage !== currentPage) {
      this.fetchImages()
    }
    if (this.state.page !== 1) {
      const {scrollTop, clientHeight} = document.documentElement
      window.scrollTo({
        top: scrollTop + clientHeight - 170,
        behavior: "smooth",
      })
    }
  }

  fetchImages = () => {
    const {query, page} = this.state
    this.setState({loading: true})
    articlesApi
      .fetchArticlesWithQuery(query, page)
      .then((gallery) => {
        this.setState((prevState) => ({gallery: [...prevState.gallery, ...gallery], page: prevState.page + 1}))
      })
      .catch((error) => this.setState({error}))
      .finally(() => this.setState({loading: false}))
  }

  handleSubmitForm = (query) => {
    this.setState({query: query, page: 1, gallery: []})
  }

  handleModal = () => {
    this.setState((state) => ({modalIsOpen: !state.modalIsOpen}))
  }

  getLargeImg = (img) => {
this.setState({largeImageURL: img})
  }

  render() {
    const {gallery, loading, error, modalIsOpen, largeImageURL} = this.state
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {error && <p>{error.message}</p>}
        {gallery.length > 0 && <ImageGallery gallery={gallery} getImg={this.getLargeImg} onClick={this.handleModal} />}
        {loading && (
          <Loader 
          className={css.spinner}
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
        {gallery.length > 0 && !loading && <Button onClick={this.fetchImages} />}

        {modalIsOpen && (
          <Modal onClose={this.handleModal}>
            <img src={largeImageURL} alt=""/>
          </Modal>
        )}
      </>
    )
  }
}

export default App
