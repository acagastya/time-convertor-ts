import React from "react";

import ShowFuture from "./ShowFuture";

import { getSavedZones } from "../../utils";

function SavedFuture({
  selectedTime,
}: {
  selectedTime: moment.Moment | undefined;
}): JSX.Element {
  const list = getSavedZones();
  return (
    <div className="mt-5">
      {selectedTime && list.length > 0 ? (
        <ShowFuture selectedTime={selectedTime} zones={list} />
      ) : (
        <h5
          className="border-top mt-5 text-center"
          style={{ paddingTop: "1rem" }}
        >
          You haven't {selectedTime ? "saved any timezones" : "selected a time"}{" "}
          so far.{" "}
          <span aria-label="Saved list is empty." role="img">
            😅
          </span>
        </h5>
      )}
    </div>
  );
}

export default SavedFuture;
