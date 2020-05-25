import React from 'react';

import ShowSavedZones from './ShowSavedZones';

import { getSavedZones } from '../../utils';

import { ISavedTimezones } from '../../utils/interfaces';

function SavedTimezones({ time }: ISavedTimezones): JSX.Element {
  const savedZones = getSavedZones();
  return (
    <div className="Saved">
      {savedZones.length > 0 ? (
        // @ts-ignore
        <ShowSavedZones savedZones={savedZones} time={time} />
      ) : (
        <h5
          className="border-top mt-5 text-center"
          style={{ paddingTop: '1rem' }}
        >
          You haven't saved any timezones so far.
        </h5>
      )}
    </div>
  );
}

export default SavedTimezones;
