import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@/utils/enum';
import Style from '../assets/index.less';

export default function () {
  const history = useHistory();

  useEffect(() => {}, []);
  return (
    <div
      className={`${Style.content} ${Style.task}`}
      onClick={() => {
        history.push(`/${ROUTES.TASK_DETAIL}`);
      }}
    ></div>
  );
}
