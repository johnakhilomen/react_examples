import React, { useEffect, useState } from 'react'

export default function EffectOnce() {
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')

    useEffect(() => {
        settitle('Welcome to my Site!');

        setInterval(() => {
            setdate(new Date().toISOString())
        }, 1000);
      }, []); // Pass [] to only apply the effect once

      useEffect(() => {
        document.title = `Current date ${date}`;
      }, [date]); // Only rerun the effect if `date` changes

  return (
    <div>
        <p>Title {title}</p>
        <p>Current DateTime {date}</p>
    </div>
  )
}
