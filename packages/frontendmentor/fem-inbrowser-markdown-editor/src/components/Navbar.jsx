import { Component, createRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import ThemeContext from "../contexts/ThemeContext";

import {
  faFile,
  faTrashAlt,
  faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";

import uuid from "react-uuid";
import style from "./Navbar.module.css";

import Modal from "./Modal.jsx";

export default class extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      modal: false,
      modalDelete: false,
    };
  }

  setModalState() {
    this.setState({ modal: !this.state.modal });
  }

  setModalDeleteState() {
    this.setState({ modalDelete: !this.state.modalDelete });
    this.deleteDocument();
  }

  deleteDocument() {
    const data = JSON.parse(localStorage.getItem("document"));
    const d = data.findIndex((e) => e.id === this.props.document.id);
    data.splice(d, d + 1);
    data[0].lastOpened = true;
    localStorage.setItem("document", JSON.stringify(data));
    this.props.setDocumentsState(data);
    if (d === -1) {
      this.props.setDocumentState("1", "untitled.md", "# Hello!");
      return;
    }
    this.props.setDocumentState(
      data[0].id,
      data[0].name,
      data[0].content,
      true
    );
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, _]) => {
          return (
            <nav className={`${style.nav}`} data-theme={theme}>
              {this.state.modal ? (
                <Modal
                  setModalState={this.setModalState.bind(this)}
                  setModalDeleteState={this.setModalDeleteState.bind(this)}
                  docName={this.props.document.name}
                />
              ) : (
                ""
              )}
              <button
                type="button"
                className={style.ham}
                onClick={this.props.setDrawerState}
                style={{
                  background: this.props.drawer
                    ? "var(--red-6)"
                    : "var(--blue-gray)",
                }}
              >
                {!this.props.drawer ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faX} />
                )}
              </button>

              <div className={style.navinfo}>
                <span className={style.mdtitle}>markdown</span>
                <span className={style.sep} />
                <div className={style.infotitle}>
                  <FontAwesomeIcon icon={faFile} />

                  <div>
                    <span>document name</span>
                    <input
                      className={style.editabletitle}
                      value={this.props.document.name}
                      ref={this.props.setRef}
                      onInput={(e) => {
                        this.props.setDocumentState(
                          this.props.document.id,
                          e.target.value.trim().length === 0
                            ? this.props.document.name
                            : e.target.value,
                          this.props.document.content
                        );
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={style.btngroup}>
                <button
                  className={style.binbtn}
                  type="button"
                  onClick={() => {
                    if (!this.state.modalDelete) {
                      this.setModalState();
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>

                <button
                  className={style.savebtn}
                  type="button"
                  onClick={() => {
                    const data = JSON.parse(localStorage.getItem("document"));
                    const target = data.findIndex(
                      (e) => e.id === this.props.document.id
                    );
                    data[target].content = this.props.document.content;
                    data[target].name = this.props.document.name;
                    this.props.setDocumentsState(data);
                    localStorage.setItem("document", JSON.stringify(data));
                  }}
                >
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  <p>save document</p>
                </button>
              </div>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
