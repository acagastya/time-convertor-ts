import React from 'react';

import { friendlyStr, unfriendlyStr } from '../../utils';

import { timezoneList } from '../../utils';

import { ITimezoneInput } from '../../utils/interfaces';

function TimezoneInput({
  autofocus = false,
  changeValue,
  clearInput,
  id = '',
  placeholder = 'Time zone',
  TZ = 'UTC',
}: ITimezoneInput): JSX.Element {
  const options = timezoneList;
  const [suggestions, setSuggestions] = React.useState<string[] | []>([]);
  const [inputValue, setInputValue] = React.useState(friendlyStr(TZ));
  const [style, setStyle] = React.useState<object>({
    border: 0,
    borderBottom: '1px solid silver',
  });

  function handleBlur(): void {
    setStyle({
      'border': 0,
      'borderBottom': '1px solid silver',
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    if (clearInput) clearInput(undefined);
    setInputValue(value);

    let recommendations: string[] | [] = [];
    if (value.length) {
      recommendations = options.filter((option) =>
        option.toLowerCase().includes(unfriendlyStr(value).toLowerCase())
      );
      if (value.length <= 3)
        recommendations.sort((a, b) => a.length - b.length);
    } else {
      recommendations = [...options];
    }
    setSuggestions(recommendations);
  }

  function handleClick(value: string) {
    setSuggestions([]);
    setInputValue(friendlyStr(value));
    changeValue(unfriendlyStr(value));
  }

  function handleFocus(): void {
    setStyle({
      'border': 'none',
    });
  }

  function showLI(str: string, index: number, arr: string[]): JSX.Element {
    return (
      <li
        className="list-group-item list-group-item-action"
        key={index}
        onClick={() => handleClick(str)}
        style={{ cursor: 'pointer' }}
      >
        {friendlyStr(str)}
      </li>
    );
  }

  return (
    <div className="h4">
      <input
        aria-placeholder={placeholder}
        autoComplete="false"
        autoFocus={autofocus}
        className="w-75"
        id={id}
        maxLength={100}
        name={id}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        role="searchbox"
        style={style}
        type="text"
        value={inputValue}
      />
      <div
        className="suggestion-list"
        style={{
          boxShadow:
            suggestions.length > 0
              ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
              : 'none',
          left: '15px',
          maxHeight: '50vh',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          position: 'absolute',
          right: '15px',
          WebkitOverflowScrolling: 'touch',
          zIndex: 2,
        }}
      >
        <div className="h6 mb-0">
          <ul className="list-group">
            {
              // @ts-ignore don't know why ts is complaining about this
              suggestions.length > 0 ? suggestions.map(showLI) : null
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimezoneInput;
