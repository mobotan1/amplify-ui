import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconViewComfy = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 5V19H22V5H3ZM20 9H17.75V7H20V9ZM9.25 11H11.5V13H9.25V11ZM7.25 13H5V11H7.25V13ZM11.5 9H9.25V7H11.5V9ZM13.5 7H15.75V9H13.5V7ZM11.5 15V17H9.25V15H11.5ZM13.5 15H15.75V17H13.5V15ZM13.5 13V11H15.75V13H13.5ZM17.75 11H20V13H17.75V11ZM7.25 7V9H5V7H7.25ZM5 15H7.25V17H5V15ZM17.75 17V15H20V17H17.75Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
