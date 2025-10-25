---
sidebar_position: 1
---

# AtWish Dagster Documentation

:::warning WARNING
This is not official documentation. It has been prepared as part of AtWish's exploration and expertise with Dagster OSS. If you notice any issues or missing content, feel free to submit a pull request or reach out at contact@shantanukhond.me. Thank you!
:::

Dagster is an open-source data orchestration platform for the modern data stack. It empowers data engineers to build, test, and monitor data pipelines with confidence, providing a developer-friendly interface for crafting reliable data workflows. Whether you're a data engineer, data scientist, or analytics engineer, Dagster offers a range of features to enhance your data pipeline development journey:

## Key Features

Dagster provides a comprehensive set of tools designed to make data pipeline development more reliable and maintainable:

- **Pipeline as Code**: Define your data pipelines using Python, with strong typing and validation built-in
- **Rich Observability**: Monitor pipeline execution with detailed logs, metrics, and data lineage tracking
- **Local Development**: Test and debug pipelines locally before deploying to production
- **Asset Management**: Track data assets and their dependencies across your entire data platform
- **Resource Management**: Handle credentials, connections, and configurations securely
- **Testing Framework**: Built-in testing capabilities to ensure pipeline reliability

## Supported Integrations

Dagster can integrate with any data processing tool or service that has a Python API or connector. Some major supported integrations include:

- **Data Processing**: dbt, Apache Spark, Pandas, Polars
- **Cloud Services**: AWS (S3, Redshift, EMR), GCP (BigQuery, Cloud Storage), Azure (Data Factory, Synapse)
- **Databases**: PostgreSQL, MySQL, SQLite, Snowflake, BigQuery
- **Storage**: S3, GCS, Azure Blob Storage, local filesystems
- **APIs**: REST APIs, GraphQL, custom Python libraries

## Why Choose Dagster?

Unlike traditional workflow orchestration tools, Dagster is built specifically for the modern data stack. It understands the unique challenges of data engineering, such as data quality, lineage tracking, and the need for reliable testing. With Dagster, you can:

- Build pipelines that are easy to understand and maintain
- Catch issues before they reach production
- Scale your data operations as your team grows
- Integrate seamlessly with your existing data tools

Remember, Dagster is all about making data pipeline development delightful and reliable. Happy orchestrating! 🚀

## Getting Started

Ready to start with Dagster? Here are the essential resources to get you up and running:

### Installation Options

- **[Docker Installation](/docs/Installation/Docker)** - Deploy Dagster using Docker containers for easy setup and consistency across environments

### Quick Links

- **GitHub Deployment Repository**: [At-Wish/code-dagster-deploy](https://github.com/At-Wish/code-dagster-deploy) - Ready-to-use Docker Compose setup for Dagster deployment
- **Official Dagster Documentation**: [docs.dagster.io](https://docs.dagster.io) - Comprehensive guides and API references
