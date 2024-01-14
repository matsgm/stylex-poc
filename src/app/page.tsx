/* eslint-disable react/display-name */
"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import "./styles.css";
import StyledSelectValue from "./_ui/StyledSelectValue";
import StyledSeletIcon from "./_ui/StyledSelectIcon";
import useDogBreeds from "./_resources/useDogBreeds";
import StyledSelectItem from "./_ui/StyledSelectItem";

export default function Page() {
  const { breeds } = useDogBreeds({});
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <StyledSelectValue placeholder="Select a fruit…" />
        <StyledSeletIcon>
          <ChevronDownIcon />
        </StyledSeletIcon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {breeds?.map((breed) => (
              <StyledSelectItem
                key={breed.id}
                value={breed.id as unknown as string}
              >
                {breed.name}
              </StyledSelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
