import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  cloud: [
    {
      type: "category",
      label: "Start Here",
      link: {
        type: "doc",
        id: "getting-started",
      },
      items: [
        "understanding-platform",
        {
          type: "category",
          label: "Walkthrough Guides",
          link: {
            type: "generated-index",
            title: "Walkthrough Guides",
          },
          items: [
            {
              "Beginner's Guides": [
                "guides/first-feature",
                "guides/logging-events",
                "guides/abn-tests",
              ],
            },
            {
              "Advanced Guides": [
                "guides/first-dynamic-config",
                "guides/first-holdout",
                "guides/first-segment",
                "guides/experiment-on-custom-id-types",
                "guides/using-environments",
                "guides/setting-up-reviews",
                "guides/private-attributes",
                "guides/cdn-edge-testing",
              ],
            },
            {
              "Common Use Cases": [
                "guides/aa-test",
                "guides/shopify-ab-test",
                "guides/framer-analytics",
                "guides/webflow-sidecar-ab-test",
                "guides/aa-sidecar",
                "guides/sendgrid-email-abtest",
                "guides/customer-io-email-abtest",
                "guides/email-campaign-test",
                "guides/cms-integrations",
                "guides/first-device-level-experiment",
              ],
            },
            {
              type: "category",
              label: "Technology-Specific Guides",
              link: {
                type: "doc",
                id: "guides/frameworks-introduction",
              },
              items: [
                "guides/python-flask-feature-flags",
                "guides/python-flask-abtests",
                "guides/node-express-feature-flags",
                "guides/node-express-abtests",
                "guides/nextjs-feature-flags",
                "guides/nextjs-page-router-feature-flags",
              ],
            },
            {
              type: "category",
              label: "Migrate from LaunchDarkly",
              link: {
                type: "doc",
                id: "guides/migrate-from-launchdarkly",
              },
              items: ["guides/open-source-script", "guides/ui-based-tool"],
            },
            "guides/synchronized-launch",
            "guides/featureflags-or-experiments",
            "guides/experimentation-program",
            "guides/serverless",
            "guides/config-history",
            "guides/running-a-poc",
            "guides/production",
            "guides/testing",
            "guides/uptime",
            "guides/fomo",
            "guides/statsig-id-resolver",
          ],
        },
        {
          type: "category",
          label: "Developer Guides",
          link: {
            type: "generated-index",
            title: "Developer Guides",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "developer-guides",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Feature Flags",
      items: [
        {
          type: "category",
          label: "Feature Flags",
          link: {
            type: "doc",
            id: "feature-flags/working-with",
          },
          items: [
            "feature-flags/create-new",
            "feature-flags/add-rule",
            "feature-flags/test-gate",
            "feature-flags/overrides",
            "feature-flags/scheduled-rollouts",
            {
              Implement: [
                "feature-flags/implement",
                "feature-flags/implement/client",
                "feature-flags/implement/server",
                "feature-flags/implement/http-api",
              ],
            },
            "feature-flags/conditions",
            "feature-flags/view-exposures",
            "feature-flags/feature-flags-lifecycle",
            "feature-flags/permanent-and-stale-gates",
            "feature-flags/best-practices",
          ],
        },
        {
          type: "category",
          label: "Dynamic Config",
          link: {
            type: "doc",
            id: "dynamic-config/introduction",
          },
          items: [
            "dynamic-config/working-with",
            "dynamic-config/enforce-schema",
            "dynamic-config/create-new",
            "dynamic-config/add-rule",
          ],
        },
        {
          type: "category",
          label: "Segments",
          link: {
            type: "doc",
            id: "segments/introduction",
          },
          items: [
            "segments/create-new",
            "segments/add-rule",
            "segments/add-id-list",
            "segments/use-segment",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Experimentation",
      items: [
        {
          type: "category",
          label: "Experiments",
          link: {
            type: "doc",
            id: "experiments-plus/introduction",
          },
          items: [
            "experiments-plus/working-with",
            "experiments-plus/create-new",
            "experiments-plus/power-analysis",
            "experiments-plus/implement",
            "experiments-plus/rules",
            "experiments-plus/getting-group",
            "experiments-plus/monitor",
            "experiments-plus/read-results",
            "experiments-plus/sequential-testing",
            "experiments-plus/make-decision",
            "experiments-plus/overrides",
            "experiments-plus/stratified-sampling",
            "experiments-plus/differential-impact-detection",
            "experiments-plus/pause-assignment",
            "experiments-plus/abandon",
            "experiments-plus/ending-experiment",
            "experiments-plus/disable-group",
            "experiments-plus/bayesian",
            "experiments-plus/switchback-tests",
            {
              Experimentation: [
                "experiments-plus/experimentation/why-experiment",
                "experiments-plus/experimentation/scenarios",
                "experiments-plus/experimentation/best-practices",
                "experiments-plus/experimentation/common-terms",
                "experiments-plus/experimentation/choosing-randomization-unit",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Stats Engine",
          link: {
            type: "doc",
            id: "stats-engine/introduction",
          },
          items: [
            "stats-engine/metric-deltas",
            "stats-engine/variance",
            "stats-engine/confidence-intervals",
            "stats-engine/p-value",
            "stats-engine/topline-impact",
            "stats-engine/variance-reduction",
            "stats-engine/offlineaa",
            "stats-engine/pre-experiment-bias",
            {
              "Methodologies Used": [
                "stats-engine/methodologies/bonferroni-correction",
                "stats-engine/methodologies/benjamini–hochberg-procedure",
                "stats-engine/methodologies/cuped",
                "stats-engine/methodologies/delta-method",
                "stats-engine/methodologies/srm-checks",
                "stats-engine/methodologies/winsorization",
                "stats-engine/methodologies/one-sided-test",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Layers",
          link: {
            type: "doc",
            id: "layers/introduction",
          },
          items: ["layers/js-tutorial"],
        },
        {
          type: "category",
          label: "Landing Page Experiments (deprecated)",
          items: [
            "guides/landing-page-experiments/introduction",
            "guides/landing-page-experiments/setup",
            "guides/landing-page-experiments/interpreting",
            "guides/landing-page-experiments/layers",
            "guides/landing-page-experiments/webflow",
          ],
        },
        {
          type: "category",
          label: "Low-code Experiments",
          items: [
            "guides/sidecar-experiments/introduction",
            "guides/sidecar-experiments/setup",
            "guides/sidecar-experiments/creating-experiments",
            "guides/sidecar-experiments/measuring-experiments",
            "guides/sidecar-experiments/publishing-experiments",
            "guides/sidecar-experiments/integrating-gtm",
          ],
        },
        "holdouts/introduction",
        {
          type: "category",
          label: "Pulse",
          link: {
            type: "doc",
            id: "pulse/introduction",
          },
          items: [
            "pulse/read-pulse",
            "pulse/drill-down",
            "pulse/custom-queries",
            "pulse/export",
            "pulse/best-practices",
            "pulse/faq",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Product Analytics",
      items: [
        "product-analytics/overview",
        {
          type: "category",
          label: "Metric Explorer",
          items: [
            "product-analytics/drilldown",
            "product-analytics/funnels",
            "product-analytics/retention",
            "product-analytics/distribution",
            "product-analytics/user-journeys",
          ],
        },
        "product-analytics/dashboards",
        {
          type: "category",
          label: "Metrics",
          link: {
            type: "doc",
            id: "metrics/introduction",
          },
          items: [
            {
              "Metrics 101 - Overview": [
                "metrics/101",
                "metrics/how-metrics-work",
                "metrics/raw-events",
                "metrics/raw-event-metrics",
                "metrics/custom-metrics",
                "metrics/precomputed-metrics",
                "metrics/user-dimensions",
                "metrics/metric-dimensions",
              ],
            },
            // other
            "metrics/ingest",
            "metrics/pulse",
            "metrics/local-metrics",
            "metrics/console",
            "metrics/health-checks",

            // 201
            "metrics/create",
            "metrics/archiving-metrics",
            "metrics/create-metric-tags",
            "metrics/metric-alerts",
            "metrics/user",

            // 301
            "metrics/create-user-flows",
            "metrics/create-user-funnels",
            "metrics/verified",

            "metrics/autogenerated",
          ],
        },
        "users/introduction",
        "insights/introduction",
      ],
    },
    {
      type: "category",
      label: "Warehouse Native",
      link: {
        type: "doc",
        id: "statsig-warehouse-native/introduction",
      },
      items: [
        {
          type: "category",
          label: "Guides",
          items: [
            "statsig-warehouse-native/guides/quick-start",
            "statsig-warehouse-native/guides/running_a_poc",
            "statsig-warehouse-native/guides/playground_eval",
            "statsig-warehouse-native/guides/sdks",
            "statsig-warehouse-native/guides/aatest",
            "metrics/different-id",
            {
              type: "category",
              label: "Debugging",
              items: [
                "statsig-warehouse-native/guides/checklist",
                "statsig-warehouse-native/guides/debugging",
                "statsig-warehouse-native/guides/sql",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Warehouse Integration",
          items: [
            {
              type: "category",
              label: "Connect Your Warehouse",
              link: {
                type: "doc",
                id: "statsig-warehouse-native/guides/connect",
              },
              items: [
                "statsig-warehouse-native/connecting-your-warehouse/bigquery",
                "statsig-warehouse-native/connecting-your-warehouse/snowflake",
                "statsig-warehouse-native/connecting-your-warehouse/databricks",
                "statsig-warehouse-native/connecting-your-warehouse/redshift",
                "statsig-warehouse-native/connecting-your-warehouse/athena",
              ],
            },
            "statsig-warehouse-native/connecting-your-warehouse/forwarded-data",
            "statsig-warehouse-native/analysis-tools/data-privacy",
            "statsig-warehouse-native/guides/best-practices",
          ],
        },
        {
          type: "category",
          label: "Data & Semantic Layer",
          link: {
            type: "doc",
            id: "statsig-warehouse-native/configuration/data-and-semantic-layer",
          },
          items: [
            "statsig-warehouse-native/configuration/metric-sources",
            {
              type: "category",
              label: "Metrics",
              link: {
                type: "doc",
                id: "statsig-warehouse-native/configuration/metrics",
              },
              items: [
                "statsig-warehouse-native/metrics/sum",
                "statsig-warehouse-native/metrics/count",
                "statsig-warehouse-native/metrics/count-distinct",
                "statsig-warehouse-native/metrics/unit-count-once",
                "statsig-warehouse-native/metrics/unit-count-window",
                "statsig-warehouse-native/metrics/unit-count-latest",
                "statsig-warehouse-native/metrics/unit-count-rate",
                "statsig-warehouse-native/metrics/mean",
                "statsig-warehouse-native/metrics/ratio",
                "statsig-warehouse-native/metrics/funnel",
                "statsig-warehouse-native/metrics/percentile",
              ],
            },
            "statsig-warehouse-native/configuration/dimensional-analysis",
            "statsig-warehouse-native/configuration/assignment-sources",
            "statsig-warehouse-native/configuration/entity-properties",
            "statsig-warehouse-native/configuration/qualifying-events",
            "statsig-warehouse-native/configuration/tags-and-teams",
            "metrics/verified",
            "statsig-warehouse-native/configuration/query-tools",
            {
              type: "category",
              label: "Programmatic Management",
              items: [
                "statsig-warehouse-native/configuration/console-api",
                "statsig-warehouse-native/configuration/semantic-layer-sync",
              ],
            },
            "statsig-warehouse-native/features/roles-and-access",
          ],
        },
        {
          type: "category",
          label: "Experiment Analysis",
          items: [
            {
              type: "category",
              label: "Setup",
              items: [
                "statsig-warehouse-native/features/configure-an-experiment",
                "statsig-warehouse-native/features/types-of-experiments",
                "statsig-warehouse-native/features/power-analysis",
                "holdouts/introduction",
                "experiments-plus/stratified-sampling",
                "experiments-plus/differential-impact-detection",
                "statsig-warehouse-native/features/targeting",
                "statsig-warehouse-native/features/id-resolution",
                "statsig-warehouse-native/features/filtering-exposures",
              ],
            },
            {
              type: "category",
              label: "Loading Results",
              link: {
                type: "doc",
                id: "statsig-warehouse-native/features/reloads",
              },
              items: [
                "statsig-warehouse-native/features/full-reloads",
                "statsig-warehouse-native/features/incremental-reloads",
                "statsig-warehouse-native/features/metric-reloads",
                "statsig-warehouse-native/connecting-your-warehouse/scheduled-reloads",
                "statsig-warehouse-native/analysis-tools/pipeline-overview",
                "statsig-warehouse-native/features/freshness",
              ],
            },
            {
              type: "category",
              label: "Interpreting Results",
              items: [
                "pulse/read-pulse",
                "pulse/drill-down",
                "pulse/custom-queries",
                "pulse/export",
                "pulse/best-practices",
                "pulse/faq",
                "statsig-warehouse-native/features/monitor-an-experiment",
              ],
            },
            {
              type: "category",
              label: "Statistics",
              link: {
                type: "doc",
                id: "statsig-warehouse-native/features/statistics",
              },
              items: [
                "stats-engine/metric-deltas",
                "stats-engine/variance",
                "stats-engine/confidence-intervals",
                "stats-engine/p-value",
                "stats-engine/topline-impact",
                "stats-engine/variance-reduction",
                // "stats-engine/offlineaa",
                "stats-engine/pre-experiment-bias",
                {
                  "Methodologies Used": [
                    "stats-engine/methodologies/bonferroni-correction",
                    "stats-engine/methodologies/benjamini–hochberg-procedure",
                    "stats-engine/methodologies/cuped",
                    "stats-engine/methodologies/delta-method",
                    "stats-engine/methodologies/srm-checks",
                    "stats-engine/methodologies/winsorization",
                    "stats-engine/methodologies/one-sided-test",
                  ],
                },
              ],
            },
            "experiments/meta-analysis",
            "statsig-warehouse-native/features/reports",
            "statsig-warehouse-native/features/autotune",
          ],
        },
        "statsig-warehouse-native/features/mex-on-warehouse-native",
        "statsig-warehouse-native/features/other-useful-features",
        "statsig-warehouse-native/native-vs-cloud",
      ],
    },
    {
      type: "category",
      label: "Session Replay",
      items: [
        "session-replay/overview",
        "session-replay/install",
        "session-replay/configure",
        "session-replay/watch",
      ],
    },
    {
      type: "category",
      label: "Web Analytics",
      items: ["webanalytics/overview"],
    },
    {
      type: "category",
      label: "AI/ML",
      items: [
        "ai-ml/ai-prompt-experiment",
        {
          type: "category",
          label: "Autotune (Bandits)",
          link: {
            type: "doc",
            id: "autotune/introduction",
          },
          items: [
            "autotune/contextual-bandit",
            "autotune/multi-armed-bandit",
            "autotune/setup",
            "autotune/monitoring",
          ],
        },
      ],
    },
    
    {
      type: "category",
      label: "SDKs, APIs, Integrations",
      items: [
        "sdks/getting-started",
        {
          type: "category",
          label: "Client SDKs",
          link: {
            type: "doc",
            id: "client/introduction",
          },
          items: [
            {
              Concepts: [
                "client/concepts/user",
                "client/concepts/initialize",
                "client/concepts/bootstrapping",
                "client/concepts/persistent_assignment",
                "sdks/debugging",
                "sdk-keys/target-apps",
                "client/concepts/parameter-stores",
              ],
            },
            {
              type: "category",
              label: "JavaScript/React",
              items: [
                "client/javascript-sdk",
                "client/javascript-mono/ReactUsage",
                "client/javascript-mono/ReactNativeUsage",
                "client/javascript-mono/ExpoUsage",
                "client/javascript-mono/NextJsAppRouterUsage",
                "client/javascript-mono/NextJsPageRouterUsage",
                "client/javascript-mono/UsingEvaluationsDataAdapter",
                "client/javascript-mono/InitStrategies",
                "client/javascript-mono/Examples",
                "client/javascript-mono/MigrationFromOldJsClient",
                "client/javascript-mono/MigrationFromOldReact",
              ],
            },
            "client/iosClientSDK",
            "client/androidClientSDK",
            "client/dotnetSDK",
            "client/rokuSDK",
            "client/unitySDK",
            "client/dartSDK",
            "client/cpp-client-sdk",
            {
              type: "category",
              label: "On Device Evaluation",
              items: [
                {
                  type: "category",
                  label: "JavaScript",
                  link: {
                    type: "doc",
                    id: "client/js-on-device-eval-client",
                  },
                  items: [
                    "client/js-device-eval-mono/MigrationFromOldSDK",
                    "client/js-device-eval-mono/UsingSpecsDataAdapter",
                    "client/js-device-eval-mono/ReactNativeUsage",
                  ],
                },
                "client/swiftOnDeviceEvaluationSDK",
                "client/androidOnDeviceEvaluationSDK",
              ],
            },
            {
              type: "category",
              label: "JavaScript - Maintainance Mode",
              items: [
                "client/jsClientSDK",
                "client/reactSDK",
                "client/reactNativeSDK",
                "client/reactNativeExpoSDK",
                "client/jsLocalEvaluationSDK",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Server SDKs",
          link: {
            type: "doc",
            id: "server/introduction",
          },
          items: [
            {
              Concepts: [
                "server/concepts/user",
                "messages/serverRequiredUserID",
                "server/concepts/data_store",
                "server/concepts/forward_proxy",
                "server/concepts/persistent_assignment",
                "sdks/debugging",
                "sdk-keys/target-apps",
                "server/concepts/all_assignments",
              ],
            },
            "server/nodejsServerSDK",
            "server/javaSdk",
            "server/pythonSDK",
            "server/golangSDK",
            "server/rubySDK",
            "server/dotnetSDK",
            "server/phpSDK",
            "server/erlangSDK",
            "server/rustSDK",
            "server/cppSDK",
            "server/deprecation-notices",
          ],
        },
        "http-api",
        {
          type: "category",
          label: "Console API",
          link: {
            type: "doc",
            id: "console-api/introduction",
          },
          items: [
            "console-api/autogenerated",
            "console-api/gates",
            "console-api/segments",
            "console-api/dynamic-configs",
            "console-api/experiments",
            "console-api/holdouts",
            "console-api/layers",
            "console-api/users",
            "console-api/metrics",
            "console-api/audit-logs",
            "console-api/exposure-count",
            "console-api/autotunes",
            "console-api/target-apps",
            "console-api/ingestions",
            "console-api/tags",
            "console-api/keys",
            {
              Reports: [
                "console-api/daily-reports",
                "console-api/daily-reports-deprecated",
              ],
            },
            "console-api/usage-billing",
            "console-api/rules",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          link: {
            type: "doc",
            id: "integrations/introduction",
          },
          items: [
            {
              "Data Connectors": [
                "integrations/data-connectors/census",
                "integrations/data-connectors/google-analytics",
                "integrations/data-connectors/fivetran",
                "integrations/data-connectors/heap",
                "integrations/data-connectors/hightouch",
                "integrations/data-connectors/mparticle",
                "integrations/data-connectors/revenuecat",
                "integrations/data-connectors/segment",
                "integrations/data-connectors/rudderstack",
                "integrations/data-connectors/stitch",
                "integrations/data-connectors/mixpanel",
                "integrations/data-connectors/amplitude",
              ],
            },
            {
              "Data Imports (Deprecated)": [
                "integrations/data-imports/overview-deprecated",
                "integrations/data-imports/bigquery-deprecated",
                "integrations/data-imports/redshift-deprecated",
                "integrations/data-imports/snowflake-deprecated",
                "integrations/data-imports/azure_upload-deprecated",
              ],
            },
            {
              "Data Exports": ["integrations/data-exports/overview"],
            },
            "integrations/event_filtering",
            "integrations/event_webhook",
            "integrations/jira",
            "integrations/vercel",
            "integrations/cloudflare",
            "integrations/fastly",
            "integrations/vscode",
            "integrations/datadog",
            "integrations/github_code_references",
            "integrations/slack",
            "integrations/openai",
            "integrations/gtm",
            {
              type: "category",
              label: "Terraform",
              link: {
                type: "doc",
                id: "integrations/terraform/introduction",
              },
              items: [
                "integrations/terraform/terraform_gate",
                "integrations/terraform/terraform_experiment",
              ],
            },
            {
              type: "category",
              label: "Triggers",
              link: {
                type: "doc",
                id: "integrations/triggers/introduction",
              },
              items: ["integrations/triggers/datadog"],
            },
          ],
        },
        {
          type: "category",
          label: "Data Warehouse Ingestion",
          link: {
            type: "doc",
            id: "data-warehouse-ingestion/introduction",
          },
          items: [
            {
              "Connection Set Up": [
                "data-warehouse-ingestion/bigquery",
                "data-warehouse-ingestion/redshift",
                "data-warehouse-ingestion/snowflake",
                "data-warehouse-ingestion/databricks",
                "data-warehouse-ingestion/synapse",
                "data-warehouse-ingestion/s3",
                "data-warehouse-ingestion/athena",
                "data-warehouse-ingestion/faq",
              ],
            },
            "data-warehouse-ingestion/data_mapping",
          ],
        },
        {
          type: "category",
          label: "Notices",
          items: [
            "sdks/group-name-breaking-change",
            "sdks/pagination-params-breaking-change",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Statsig CLI",
      link: {
        type: "doc",
        id: "siggy/introduction",
      },
      items: ["siggy/commands", "siggy/gate-management"],
    },
    {
      type: "category",
      label: "Admin",
      items: [
        {
          type: "category",
          label: "Access Management",
          link: {
            type: "doc",
            id: "access-management/introduction",
          },
          items: [
            "access-management/organizations",
            "access-management/projects",
            "access-management/teams",
            {
              "Single Sign-On": [
                "access-management/sso/overview",
                "access-management/sso/okta_sso",
                "access-management/sso/azuread",
                "access-management/sso/google",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Compliance",
          link: {
            type: "doc",
            id: "compliance/introduction",
          },
          items: ["compliance/user_data_deletion_requests"],
        },
        {
          type: "category",
          label: "Infrastructure",
          link: {
            type: "doc",
            id: "infrastructure/introduction",
          },
          items: [
            "infrastructure/statsig_ip_ranges",
            "infrastructure/statsig_domains",
            "infrastructure/managed-proxy",
            "infrastructure/custom_proxy",
            "infrastructure/reliability-faq",
          ],
        },
        {
          type: "category",
          label: "Organization Policies",
          link: {
            type: "doc",
            id: "org-admin/organization_policies",
          },
          items: ["org-admin/experiment_policy", "org-admin/gates_policy"],
        },
        {
          type: "category",
          label: "Templates",
          link: {
            type: "doc",
            id: "templates/templates",
          },
          items: [],
        },
      ],
    },
    {
      type: "doc",
      id: "faq",
    },
  ],
};

export default sidebars;
