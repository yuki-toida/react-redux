import React, { ReactNode, useState } from "react";

import { LMain as MovoLMain, OSideNav, ONavGroup, ONavLink } from "movo-ui";
import { useHistory } from "react-router";
import { History } from "history";

type Props = {
  children: ReactNode;
};

const defaultNavGroupItems = (
  history: History
): {
  icon: "cog";
  text: string;
  onClick: (key: number) => void;
  key: number;
}[] => {
  return [
    {
      text: "Home",
      icon: "cog",
      onClick: () => {
        history.push("/");
      },
      key: 1
    }
  ];
};

const todoNavGroupItems = (
  history: History
): {
  icon: "cog";
  text: string;
  onClick: (key: number) => void;
  key: number;
}[] => {
  return [
    {
      text: "Todo",
      icon: "cog",
      onClick: () => {
        history.push("/todos");
      },
      key: 2
    }
  ];
};

const LMain = (props: Props) => {
  const [selected, setSelected] = useState<number>(0);
  const history = useHistory();
  return (
    <MovoLMain
      sideNav={
        <OSideNav selectedKey={selected}>
          <ONavGroup title="Default" icon="search">
            {defaultNavGroupItems(history).map(item => (
              <ONavLink
                key={item.key}
                icon="cog"
                text={item.text}
                tooltipText={item.text}
                onClick={(key: number) => {
                  setSelected(key);
                  item.onClick(key);
                }}
                navKey={item.key}
              ></ONavLink>
            ))}
          </ONavGroup>
          <ONavGroup title="Todo" icon="search">
            {todoNavGroupItems(history).map(item => (
              <ONavLink
                key={item.key}
                icon="cog"
                text={item.text}
                tooltipText={item.text}
                onClick={(key: number) => {
                  setSelected(key);
                  item.onClick(key);
                }}
                navKey={item.key}
              ></ONavLink>
            ))}
          </ONavGroup>
        </OSideNav>
      }
      headerProps={{ productName: "TODO管理", logoImagePath: "" }}
    >
      {props.children}
    </MovoLMain>
  );
};

export default LMain;
