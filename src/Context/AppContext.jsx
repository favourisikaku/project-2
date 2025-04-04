import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const UserContext = ({ children }) => {
  const [baseUrl] = useState(
    "https://scholastica-prod.westus2.cloudapp.azure.com"
  );

  const [toggleSideBar, setToggleSideBar] = useState(true);

  const SideBarVisibility = () => {
    setToggleSideBar(!toggleSideBar);
  };

  const [signUp, setSignUp] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    otp: "",
  });

  const [forgotPassword, setForgotPassword] = useState({
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [schemes, setSchemes] = useState({
    name: "",
    type: "",
    description: "",
    award_details: {
      process_first_step: "",
      process_next_steps: [],
      process_last_step: "",
      timeline: "",
    },

    // size_limits_kb: "",
    // eligibility_criteria: {
    //   gender: "",
    //   age: {
    //     min: "",
    //     max: "",
    //   },
    //   level_of_education: "",
    //   institution: "",
    //   jurisdiction_of_institution: "",
    //   institution_type: "",
    //   jamb_score: {
    //     min: "",
    //     max: "",
    //   },
    //   faculty: "",
    //   department: "",
    //   cgpa: {
    //     min: "",
    //     max: "",
    //   },
    //   stem: "no",
    //   state_of_origin: "",
    //   state_of_residence: "",
    //   disability_status: "no",
    //   national_scholarship_examination_scores: "no",
    //   nin_verified: "no",
    //   existing_award: "no",
    //   religion: "",
    // },
  });

  const [eligibility, setEligibility] = useState({
    gender: "",
    age: {
      min: "",
      max: "",
    },
    level_of_education: "",
    institution: "",
    jurisdiction_of_institution: "",
    institution_type: "",
    jamb_score: {
      min: "",
      max: "",
    },
    faculty: "",
    department: "",
    cgpa: {
      min: "",
      max: "",
    },
    stem: "no",
    state_of_origin: "",
    state_of_residence: "",
    disability_status: "no",
    national_scholarship_examination_scores: "no",
    nin_verified: "no",
    existing_award: "no",
    religion: "",
  });

  const [campaigns, setCampaigns] = useState({
    name: "",
    description: "",
    scholarship_type: "",
    logo: "",
    logoTemp: "",
    header_image: "",
    header_imageTemp: "",
    automated_message: "",
    sharing_method: "",
    award_details: {
      amount: "",
      currency: "",
      number: "",
      start_date: "",
      end_date: "",
      duration: "",
    },
    general_information: {
      overview: "",
      eligibility_and_requirements: "",
      how_it_works: "",
      frequently_asked_questions: "",
      contact_information: "",
    },

    application_requirements: {
      screening: {
        stages: "",
        reviewers_and_panel_members: [],
        visibility: "public",
        visibility_start_date: "",
        visibility_end_date: "",
      },
      documents: [
        {
          type: "",
          file_formats: [],
          max_file_size_kb: "",
        },
      ],
    },

    application_form: [
      {
        question: "",
        type: "text",
        options: [],
        sectionId: "",
      },
    ],
  });

  return (
    <AppContext.Provider
      value={{
        baseUrl,
        toggleSideBar,
        SideBarVisibility,
        signUp,
        setSignUp,
        forgotPassword,
        setForgotPassword,
        login,
        setLogin,
        schemes,
        setSchemes,
        campaigns,
        setCampaigns,
        eligibility,
        setEligibility,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
