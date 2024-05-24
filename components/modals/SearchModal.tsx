"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Range } from "react-date-range";
import qs from "query-string";
import { formatISO } from "date-fns";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Heading from "./Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const searchModal = useSearchModal();

  const router = useRouter();
  const params = useSearchParams();

  const [state, setState] = useState({
    location: undefined as CountrySelectValue | undefined,
    step: STEPS.LOCATION,
    guestCount: 1,
    roomCount: 1,
    bathroomCount: 1,
    dateRange: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    } as Range,
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [],
  );

  const onBack = useCallback(() => {
    setState((prev) => ({ ...prev, step: prev.step - 1 }));
  }, []);

  const onNext = useCallback(() => {
    setState((prev) => ({ ...prev, step: prev.step + 1 }));
  }, []);

  const onSubmit = useCallback(async () => {
    if (state.step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updateQuery: any = {
      ...currentQuery,
      locationValue: state.location?.value,
      guestCount: state.guestCount,
      roomCount: state.roomCount,
      bathroomCount: state.bathroomCount,
    };

    if (state.dateRange.startDate) {
      updateQuery.startDate = formatISO(state.dateRange.startDate);
    }

    if (state.dateRange.endDate) {
      updateQuery.endDate = formatISO(state.dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/s/",
        query: updateQuery,
      },
      { skipNull: true },
    );

    setState((prev) => ({ ...prev, step: STEPS.LOCATION }));
    searchModal.onClose();

    router.push(url);
  }, [state, searchModal, router, params, onNext]);

  const actionLabel = useMemo(() => {
    return state.step === STEPS.INFO ? "Search" : "Next";
  }, [state.step]);

  const secondaryActionLabel = useMemo(() => {
    return state.step === STEPS.LOCATION ? undefined : "Back";
  }, [state.step]);

  let bodyContent = (
    <div className="flex flex-col gap-6">
      <Heading
        title="Where do you want to go?"
        subtitle="Find the perfect location!"
      />

      <CountrySelect
        value={state.location}
        onChange={(value) =>
          setState((prev) => ({
            ...prev,
            location: value as CountrySelectValue,
          }))
        }
      />
      <hr />
      <Map center={state.location?.latlng} />
    </div>
  );

  if (state.step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          value={state.dateRange}
          onChange={(value) =>
            setState((prev) => ({ ...prev, dateRange: value.selection }))
          }
        />
      </div>
    );
  }

  if (state.step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          title="Guests"
          subtitle="How many guests are coming?"
          value={state.guestCount}
          onChange={(value) =>
            setState((prev) => ({ ...prev, guestCount: value }))
          }
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you need?"
          value={state.roomCount}
          onChange={(value) =>
            setState((prev) => ({ ...prev, roomCount: value }))
          }
        />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you need?"
          value={state.bathroomCount}
          onChange={(value) =>
            setState((prev) => ({ ...prev, bathroomCount: value }))
          }
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title="Filters"
      actionLabel={actionLabel}
      secondaryAction={state.step === STEPS.LOCATION ? undefined : onBack}
      secondayLabel={secondaryActionLabel}
      body={bodyContent}
    />
  );
};

export default SearchModal;
