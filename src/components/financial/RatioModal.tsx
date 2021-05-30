import React from "react";
import "../../styles/ratiomodal.scss";
import PropTypes from "prop-types";
import { Ratios } from "../../interfaces/ratios.interface";

export function RatioModal(props: IProps) {
  const onClose = e => {
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal_background">
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );

}
interface IProps {
  show: boolean,
  name: String,
  ratio: Ratios
}

