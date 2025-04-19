
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"img\", {\n    width: \"30px\",\n    src: \"/favicon.ico\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/index.html\",\n    class: \"nav-link\"\n  }, \"HOME\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/showcase.html\",\n    class: \"nav-link\"\n  }, \"SHOWCASE\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/ug/index.html\",\n    class: \"nav-link\"\n  }, \"USER GUIDE\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/dg/index.html\",\n    class: \"nav-link\"\n  }, \"DEVELOPER GUIDE\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/about.html\",\n    class: \"nav-link\"\n  }, \"ABOUT\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/contact.html\",\n    class: \"nav-link\"\n  }, \"CONTACT\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", { tags: \"dev\" }, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://reposense.org\",\n    class: \"nav-link\",\n    target: \"_blank\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fas fa-external-link-alt\"\n      }),\n      /*#__PURE__*/_createTextVNode(\" PRODUCTION SITE\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/RepoSense/reposense\",\n    target: \"_blank\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_11 = { class: \"navbar-form\" }\nconst _hoisted_12 = { id: \"flex-body\" }\nconst _hoisted_13 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-top\" }, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"font-weight-bold mb-2\",\n    style: {\"font-size\":\"1.25rem\"}\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, [\n        /*#__PURE__*/_createElementVNode(\"strong\", null, \"DEVELOPER GUIDE\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_14 = { class: \"nav-component slim-scroll\" }\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/index.html\" }, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, \"Contributing\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/settingUp.html\" }, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, \"Setting up\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_17 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/learningBasics.html\" }, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, \"Learning the basics\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_18 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/workflow.html\" }, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, \"Workflow\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_19 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Design and implementation\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-dropdown-btn-container\" }, [\n      /*#__PURE__*/_createElementVNode(\"i\", {\n        class: \"site-nav-dropdown-btn-icon site-nav-rotate-icon\",\n        onclick: \"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"span\", {\n          class: \"glyphicon glyphicon-menu-down\",\n          \"aria-hidden\": \"true\"\n        })\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"ul\", { class: \"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list\" }, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/architecture.html\" }, \"Architecture\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/report.html\" }, \"HTML report\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_20 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/projectManagement.html\" }, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, \"Project management\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_21 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/devOpsGuide.html\" }, [\n      /*#__PURE__*/_createElementVNode(\"strong\", null, \"DevOps guide\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_22 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Appendices\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-dropdown-btn-container\" }, [\n      /*#__PURE__*/_createElementVNode(\"i\", {\n        class: \"site-nav-dropdown-btn-icon site-nav-rotate-icon\",\n        onclick: \"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"span\", {\n          class: \"glyphicon glyphicon-menu-down\",\n          \"aria-hidden\": \"true\"\n        })\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"ul\", { class: \"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list\" }, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/cli.html\" }, \"CLI syntax reference\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/RepoSense/dg/styleGuides.html\" }, \"Style guides\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_23 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h1\", {\n    class: \"display-4\",\n    id: \"devops-guide\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, \"DevOps Guide\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#devops-guide\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"lead\" }, [\n    /*#__PURE__*/_createElementVNode(\"p\", null, \"This page documents the various components that form part of the DevOps infrastructure that RepoSense uses.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"github-actions\" }, [\n    /*#__PURE__*/_createTextVNode(\"GitHub Actions\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#github-actions\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://docs.github.com/en/actions\" }, \"GitHub Actions\"),\n    /*#__PURE__*/_createTextVNode(\" is a platform that is used by RepoSense for running the test suite and is primarily used for continuous integration and testing. The test suite is stored in \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \".github/workflows/\"),\n    /*#__PURE__*/_createTextVNode(\" and comprises of:\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ul\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"Unit tests (in \"),\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"src/tests/\"),\n      /*#__PURE__*/_createTextVNode(\")\")\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"System tests (in \"),\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"src/systemtest/\"),\n      /*#__PURE__*/_createTextVNode(\")\")\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"Frontend tests (in \"),\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"frontend/cypress/tests/\"),\n      /*#__PURE__*/_createTextVNode(\")\")\n    ])\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"continuous-integration\" }, [\n    /*#__PURE__*/_createTextVNode(\"Continuous integration\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#continuous-integration\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"All three types of tests in the test suite are run in a single GitHub Actions workflow called \\\"Continuous Integration\\\". The steps are defined in \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/.github/workflows/integration.yml\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"integration.yml\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\" and are split into two types of jobs:\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ol\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"Ubuntu/macOS/Windows JDK 11 (\"),\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"mainbuild\"),\n      /*#__PURE__*/_createTextVNode(\"): Runs both unit tests and system tests on JDK 11 running on supported Ubuntu, macOS and Windows versions. For Ubuntu, this job also produces a RepoSense report and the MarkBind documentation website for previewing.\")\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"Cypress frontend tests (\"),\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"cypress\"),\n      /*#__PURE__*/_createTextVNode(\"): Runs only the frontend tests on JDK 11 running on Ubuntu.\")\n    ])\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"The list of supported OS versions are \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources\" }, \"available on the GitHub Docs website\"),\n    /*#__PURE__*/_createTextVNode(\". These jobs should be updated regularly whenever RepoSense supports newer versions of the Java Development Kit (JDK) as well as when new OS versions are made available (via the job OS matrix). Frontend tests are run separately to take advantage of parallel job execution.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Some of the jobs execute some commands that are too complicated to be included in the workflow configuration files. Such commands are written in the form of a bash script and are located in the \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/tree/master/config/gh-actions\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"config/gh-actions\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\" folder.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"This workflow is run for both incoming pull requests to any branch as well as direct commits to any branch in the repository.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Cypress frontend tests are run against reports generated from config files in \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"frontend/cypress/configs\"),\n    /*#__PURE__*/_createTextVNode(\".\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"report-and-documentation-previews\" }, [\n    /*#__PURE__*/_createTextVNode(\"Report and documentation previews\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#report-and-documentation-previews\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"For each pull request to any branch in the repository, a RepoSense report and the MarkBind documentation website is generated based on the code submitted in the pull request. This is to facilitate pull request reviewers in being able to quickly preview how the RepoSense report and/or the documentation website will change after the pull request is merged.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Due to \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://securitylab.github.com/research/github-actions-preventing-pwn-requests\" }, \"security considerations in preventing pwn requests\"),\n    /*#__PURE__*/_createTextVNode(\", the deployment of the report and documentation previews were split across two workflows in \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/1411\" }, \"pull request #1411\"),\n    /*#__PURE__*/_createTextVNode(\":\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ol\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"Surge.sh pending build (defined in \"),\n      /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/.github/workflows/pending.yml\" }, [\n        /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"pending.yml\")\n      ]),\n      /*#__PURE__*/_createTextVNode(\"): Used for gathering information about the pull request and update the pull request checklist to indicate that the previews are pending.\")\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createTextVNode(\"Surge.sh build preview (defined in \"),\n      /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/.github/workflows/surge.yml\" }, [\n        /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"surge.yml\")\n      ]),\n      /*#__PURE__*/_createTextVNode(\"): Used for actually deploying the RepoSense report and documentation website to Surge.sh and updating the pull request checklist to link to the preview websites.\")\n    ])\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"The previews are recognised as GitHub deployments and are named \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"dashboard-$PRNUMBER\"),\n    /*#__PURE__*/_createTextVNode(\" and \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"docs-$PRNUMBER\"),\n    /*#__PURE__*/_createTextVNode(\", where \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"$PRNUMBER\"),\n    /*#__PURE__*/_createTextVNode(\" is the pull request number. Once a preview is ready, the reviewer would be able to click on \\\"View deployment\\\" or \\\"Show environments\\\" in the pull request to open the preview websites.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Both the \\\"Surge.sh pending build\\\" and \\\"Continuous Integration\\\" workflows produce an artifact respectively, which is then downloaded by the \\\"Surge.sh build preview\\\" workflow to be deployed to Surge.sh. Due to limitations in GitHub Actions in determining the workflow execution order, the \\\"Surge.sh pending build\\\" workflow is assumed to have been completed before the \\\"Continuous Integration\\\" workflow is completed.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"This task is not performed on commits to the repository, as there is no need to do so.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"After the pull request is closed or merged, the Surge.sh deployments are retained, while the GitHub environments for them are cleared by another workflow \\\"Clear deployments for closed pull requests\\\" (defined in \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/.github/workflows/delete-deploy.yml\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"delete-deploy.yml\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\"). The workflow uses \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/config/gh-actions/delete-deploy.sh\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"delete-deploy.sh\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\" (found in the \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"config/gh-actions/\"),\n    /*#__PURE__*/_createTextVNode(\" folder) to remove the environments on GitHub, and to leave a comment on the pull request with links to the Surge.sh previews for later reference.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"github-pages\" }, [\n    /*#__PURE__*/_createTextVNode(\"GitHub Pages\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#github-pages\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"This task builds the MarkBind documentation website on every push to the \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"master\"),\n    /*#__PURE__*/_createTextVNode(\" branch. The steps are defined in \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/.github/workflows/gh-pages.yml\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"gh-pages.yml\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\".\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"stale-pull-requests\" }, [\n    /*#__PURE__*/_createTextVNode(\"Stale pull requests\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#stale-pull-requests\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"This task automates the cleaning up of the pull requests by automatically marking inactive pull requests as stale and subsequently closing them. The steps and configurations are defined in \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/.github/workflows/stale.yml\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"stale.yml\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\" and the job is triggered automatically once per day.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"codecov\" }, [\n    /*#__PURE__*/_createTextVNode(\"Codecov\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#codecov\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://app.codecov.io/gh/reposense/RepoSense\" }, \"Codecov\"),\n    /*#__PURE__*/_createTextVNode(\" is a platform for checking the code coverage status of the project and the pull request patch. It runs automatically on each pull request and the settings are located in \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/codecov.yml\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"codecov.yml\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\".\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"surge-sh\" }, [\n    /*#__PURE__*/_createTextVNode(\"Surge.sh\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#surge-sh\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Surge.sh is a platform for hosting the RepoSense report and documentation preview builds. The deployment is automatically performed by the \\\"Surge.sh build preview\\\" job using the \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/blob/master/config/gh-actions/deploy.sh\" }, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"deploy.sh\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\" script in the \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"config/gh-actions/\"),\n    /*#__PURE__*/_createTextVNode(\" folder.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"For authentication, two secrets are stored and used in GitHub Actions:\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ol\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"SURGE_LOGIN\"),\n      /*#__PURE__*/_createTextVNode(\" - Holds the email address to use for the Surge.sh account\")\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"SURGE_TOKEN\"),\n      /*#__PURE__*/_createTextVNode(\" - Holds the secret account token generated for the above account (generated using \"),\n      /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"surge token\"),\n      /*#__PURE__*/_createTextVNode(\")\")\n    ])\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"The \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"surge\"),\n    /*#__PURE__*/_createTextVNode(\" command automatically detects the existence of these two environment variables and use them for authentication when deploying the RepoSense report and documentation build previews.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Currently, deployments are kept forever, even after the pull request is merged or closed. There is currently no existing functionality to automatically clean up deployments after they are no longer useful.\")\n], -1 /* HOISTED */)\nconst _hoisted_24 = { class: \"nav-component slim-scroll\" }\nconst _hoisted_25 = /*#__PURE__*/_createElementVNode(\"a\", {\n  class: \"nav-link py-1\",\n  href: \"#devops-guide\"\n}, \"DevOps Guide‎\", -1 /* HOISTED */)\nconst _hoisted_26 = /*#__PURE__*/_createElementVNode(\"nav\", { class: \"nav nav-pills flex-column my-0 nested no-flex-wrap\" }, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    class: \"nav-link py-1\",\n    href: \"#github-actions\"\n  }, \"GitHub Actions‎\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"nav\", { class: \"nav nav-pills flex-column my-0 nested no-flex-wrap\" }, [\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"nav-link py-1\",\n      href: \"#continuous-integration\"\n    }, \"Continuous integration‎\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"nav-link py-1\",\n      href: \"#report-and-documentation-previews\"\n    }, \"Report and documentation previews‎\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"nav-link py-1\",\n      href: \"#github-pages\"\n    }, \"GitHub Pages‎\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"nav-link py-1\",\n      href: \"#stale-pull-requests\"\n    }, \"Stale pull requests‎\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    class: \"nav-link py-1\",\n    href: \"#codecov\"\n  }, \"Codecov‎\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    class: \"nav-link py-1\",\n    href: \"#surge-sh\"\n  }, \"Surge.sh‎\")\n], -1 /* HOISTED */)\nconst _hoisted_27 = /*#__PURE__*/_createElementVNode(\"footer\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"text-center\" }, [\n    /*#__PURE__*/_createElementVNode(\"small\", null, [\n      /*#__PURE__*/_createTextVNode(\"[\"),\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"strong\", null, \"Powered by\")\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"img\", {\n        src: \"https://markbind.org/favicon.ico\",\n        width: \"30\"\n      }),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://markbind.org/\" }, \"MarkBind 6.0.0\"),\n      /*#__PURE__*/_createTextVNode(\", generated on Sat, 19 Apr 2025, 18:59:01 UTC]\")\n    ])\n  ])\n], -1 /* HOISTED */)\n\nreturn function render(_ctx, _cache) {\n  const _component_searchbar = _resolveComponent(\"searchbar\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n  const _component_site_nav = _resolveComponent(\"site-nav\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, { type: \"dark\" }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _createElementVNode(\"li\", null, [\n            _createElementVNode(\"form\", _hoisted_11, [\n              _createVNode(_component_searchbar, {\n                data: _ctx.searchData,\n                placeholder: \"Search\",\n                \"on-hit\": _ctx.searchCallback,\n                \"menu-align-right\": \"\"\n              }, null, 8 /* PROPS */, [\"data\", \"on-hit\"])\n            ])\n          ])\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _hoisted_3,\n          _createTextVNode(),\n          _hoisted_4,\n          _createTextVNode(),\n          _hoisted_5,\n          _createTextVNode(),\n          _hoisted_6,\n          _createTextVNode(),\n          _hoisted_7,\n          _createTextVNode(),\n          _hoisted_8,\n          _createTextVNode(),\n          _hoisted_9,\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_12, [\n      _createVNode(_component_overlay_source, {\n        id: \"site-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"site-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_13,\n          _createTextVNode(),\n          _createElementVNode(\"div\", _hoisted_14, [\n            _createElementVNode(\"div\", null, [\n              _createVNode(_component_site_nav, null, {\n                default: _withCtx(() => [\n                  _createVNode(_component_overlay_source, {\n                    class: \"site-nav-list site-nav-list-root\",\n                    \"tag-name\": \"ul\",\n                    to: \"mb-site-nav\"\n                  }, {\n                    default: _withCtx(() => [\n                      _hoisted_15,\n                      _createTextVNode(),\n                      _hoisted_16,\n                      _createTextVNode(),\n                      _hoisted_17,\n                      _createTextVNode(),\n                      _hoisted_18,\n                      _createTextVNode(),\n                      _hoisted_19,\n                      _createTextVNode(),\n                      _hoisted_20,\n                      _createTextVNode(),\n                      _hoisted_21,\n                      _createTextVNode(),\n                      _hoisted_22\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              })\n            ])\n          ])\n        ]),\n        _: 1 /* STABLE */\n      }),\n      _createTextVNode(),\n      _hoisted_23,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _createElementVNode(\"div\", _hoisted_24, [\n            _createVNode(_component_overlay_source, {\n              id: \"mb-page-nav\",\n              \"tag-name\": \"nav\",\n              to: \"mb-page-nav\",\n              class: \"nav nav-pills flex-column my-0 small no-flex-wrap\"\n            }, {\n              default: _withCtx(() => [\n                _hoisted_25,\n                _createTextVNode(),\n                _hoisted_26\n              ]),\n              _: 1 /* STABLE */\n            })\n          ])\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_27\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  