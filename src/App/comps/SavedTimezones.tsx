import React from "react";

import ShowSavedZones from "./ShowSavedZones";

import { getSavedZones } from "../../utils";

import { IMoment } from "../../utils/interfaces";

function SavedTimezones({ time }: IMoment): JSX.Element {
  const savedZones = getSavedZones();
  return (
    <div className="saved">
      {savedZones.length > 0 ? (
        <ShowSavedZones savedZones={savedZones} time={time} />
      ) : (
        <h5
          className="border-top mt-5 text-center"
          style={{ paddingTop: "1rem" }}
        >
          You haven't saved any timezones so far.{" "}
          <span aria-label="Saved list is empty." role="img">
            😅
          </span>
        </h5>
      )}
    </div>
  );
}

export default SavedTimezones;
