<div align=center>
       <img src="https://github.com/bitspaceorg/.github/assets/119417646/577c8581-499e-4cbb-a2f8-e78c643204bc" width="150" alt="Logo"/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <img src="https://github.com/user-attachments/assets/359035d0-6a5b-403a-ac6a-35c82db8c5b1" width="120" alt="Logo" />
  <h1>Innovation Challenge December 2024</h1>
  <img src="https://img.shields.io/badge/:bitspace-%23121011?style=for-the-badge&logoColor=%23ffffff&color=%23000000">
  <img src="https://img.shields.io/badge/Genspark-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black">
  <img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white">
  <img src="https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white">

  <h1>SPIN : Smart Process Innovation Network </h1>
 <a href="https://1drv.ms/p/c/b7bb6097c40f3e7e/EWqfZUKxrBtOtUfp1h9y27QB7S9cBNXIB6XsWIZMVoo0Iw?e=z0TGvh"> <img src="https://github.com/user-attachments/assets/73d36b52-0529-40b4-b008-012eeca5df05" width=30 />
 </a>
  &nbsp;&nbsp;&nbsp;
<a href="https://youtu.be/vacibgFu-tY">
       <img src="https://github.com/user-attachments/assets/bdbba9bb-e860-4eba-890f-268abdc81730" width=30 />
</a>
  &nbsp;&nbsp;&nbsp;

<a href="https://spin.bitspace.org.in">
       <img src="https://github.com/user-attachments/assets/2676cd53-a2f7-4c37-abc4-1127f00fba86" width=30 />
</a>
</div>


**SPIN** is an advanced organization management tool designed to enhance productivity and efficiency through built-in **Artificial Intelligence (AI) and Business Intelligence (BI)** features. SPIN offers a role-specific experience, ensuring each user interacts with the system based on their unique permissions and responsibilities.

Tailored for seamless integration across industries, SPIN adapts to organizational needs. For instance, in a hospital implementation, roles such as doctors, finance managers, and deans interact with the platform differently—doctors access health records, finance managers handle financial data, and deans oversee all records.

## Table of Contents

1. [System Overview](#system-overview)  
   - [Policy and Role-Based Access Management](#policy-and-role-based-access-management)  
   - [Organizational Data Management](#organizational-data-management)  
   - [Role-Based Retrieval-Augmented Generation (RAG)](#role-based-retrieval-augmented-generation-rag)  
   - [Business Intelligence with Power BI](#business-intelligence-with-power-bi)  

2. [Key Use Cases](#key-use-cases)  

3. [Core Technologies](#core-technologies)  

4. [Azure Integrations](#azure-integrations)  

5. [System Architecture](#system-architecture)  
   - [Microservices Architecture](#microservices-architecture)  
     - [Cerbos Middleware](#cerbos-middleware)  
     - [Frontend Systems](#frontend-systems)  
     - [AI Services Backend](#ai-services-backend)  
     - [Frontend Backend Services](#frontend-backend-services)  
     - [Microsoft Fabric Integration](#microsoft-fabric-integration)  
   - [Medallion Architecture](#medallion-architecture)  
     - [Bronze Layer](#bronze-layer)  
     - [Silver Layer](#silver-layer)  
     - [Gold Layer](#gold-layer)  

6. [Team Behind SPIN](#team-behind-spin)  

7. [How to Contribute](#how-to-contribute)  

## System Overview  

SPIN (Smart Process Innovation Network) is designed to streamline organizational operations by leveraging advanced technologies. Below is a detailed breakdown of its key features and functionalities.  

### **Policy and Role-Based Access Management**  

SPIN employs a robust **policy cum role-based user management system** powered by **Cerbos**, which acts as a middleware for all user operations. This system ensures that users can only perform actions permitted by their roles and organizational policies.

<div align=center>
<img src="https://raw.githubusercontent.com/t-aswath/mdeditor/refs/heads/main/rbc.png" width=500 />
</div>

### Key aspects:  

1. **Centralized Policy Management:**  
   - Policies are centrally defined and maintained, ensuring consistency across the system.  
   - Administrators can create, update, and deploy policies dynamically without disrupting operations.  

2. **Role-Specific Permissions:**  
   - Access is customized based on roles such as doctors, finance managers, or deans.  
   - Fine-grained control ensures data security and compliance with organizational rules.  

3. **Audit and Monitoring:**  
   - Tracks user actions to ensure accountability and traceability.  
   - Logs can be reviewed to detect unauthorized activities.  

Cerbos integrates seamlessly with SPIN, acting as the decision engine for every operation initiated by users, thus enhancing both security and flexibility.  

### **Organizational Data Management** 

Data is the backbone of any organization, and SPIN ensures seamless management of diverse data types using **Microsoft Fabric**.  

Key features of the data management system:  
1. **Unified Data Handling:**  
   - Supports multiple data formats to accommodate various departments and workflows.  
   - Converts input data into a unified format for standardized processing.  

2. **Medallion Architecture for Data Organization:**  
   - **Bronze Layer:** Ingests raw data into the system’s data lake.  
   - **Silver Layer:** Cleans and processes data, storing it in structured formats like Delta Tables.  
   - **Gold Layer:** Extracts insights, generates BI reports, and indexes the data for AI-driven operations. 

<div align=center>
<img src="https://raw.githubusercontent.com/t-aswath/mdeditor/refs/heads/main/Screenshot%20from%202024-12-21%2009-21-36.png" width=500 />
</div>

3. **Principles of Microsoft Fabric:**  
   - **One Copy:** A single source of truth for all data.  
   - **One Format:** Uniform data formats for seamless integration.  
   - **One Access Method:** Simplified and consistent data access.  
   - **One Governance:** Centralized governance policies for compliance.

<div align=center>
<img src="https://raw.githubusercontent.com/t-aswath/mdeditor/refs/heads/main/Screenshot%20from%202024-12-21%2009-23-55.png" width=300 />  
</div>

This ensures that SPIN provides a scalable, secure, and efficient way to manage organizational data across roles and departments.  

### **Role-Based Retrieval-Augmented Generation (RAG)**  

SPIN’s AI-powered chatbot uses **Role-Based RAG** to offer tailored assistance.  

How it works:  
1. **Data Indexing:**  
   - Data in the **gold layer** of the medallion architecture is ingested into a **vector database**.  
   - Indexed based on the roles of the users, ensuring data segregation and accessibility control.  

<div align=center>
<img src="https://raw.githubusercontent.com/t-aswath/mdeditor/refs/heads/main/Screenshot%20from%202024-12-21%2009-28-55.png" width=500/>
</div>

2. **Query Processing:**  
   - When a user interacts with the chatbot, their query is filtered through **Azure AI Search** to retrieve relevant data accessible to their role.  
   - Ensures that no user accesses data outside their permitted scope.  

3. **Intelligent Responses:**  
   - A prompt is generated using the retrieved data and sent to the **LLAMA 7b model** hosted on Azure ML Studio.  
   - The response is crafted to provide actionable insights tailored to the user’s role and context.  

Benefits:  
- Enhances productivity by offering real-time, role-specific assistance.  
- Reduces dependency on manual processes, enabling faster decision-making.  

### **Business Intelligence with Power BI**  

SPIN leverages **Power BI** to empower users with insightful, role-specific reports.  

Key highlights:  
1. **Tailored Visualizations:**  
   - BI dashboards are customized based on user roles, such as doctors viewing patient trends, finance managers analyzing budgets, or deans reviewing organizational performance.  

2. **Real-Time Insights:**  
   - Data from the **gold layer** is dynamically processed to generate up-to-date reports.  

By integrating Power BI, SPIN ensures that users have access to actionable insights that are relevant to their responsibilities, driving better outcomes for the organization.  

## Key Use Cases  

#### **1. Healthcare Sector: Enhancing Hospital Operations**  
- **Role-Specific Access:**  
  - Doctors can securely access and update patient health records.  
  - Finance managers handle hospital budgets, expenses, and revenue tracking.  
  - Deans and administrators have comprehensive access to oversee all operations.  

- **AI-Driven Assistance:**  
  - The AI chatbot provides doctors with quick insights into medical histories, best practices, or treatment plans.  
  - Finance managers can use BI dashboards to analyze financial performance and predict future trends.  

- **Data Consolidation:**  
  - Streamlines hospital workflows by unifying patient, financial, and administrative data for seamless operations.  

#### **2. Educational Institutions: Streamlined Administration**  
- **Policy-Based User Management:**  
  - Professors can upload grades, access academic resources, and interact with the chatbot for curriculum assistance.  
  - Students can view grades, download learning materials, and seek support through AI-driven queries.  
  - Administrators oversee operations, including faculty performance, student progress, and institutional finances.  

- **BI Reporting:**  
  - Dashboards provide insights into student performance, resource utilization, and budget allocation.  

#### **3. Corporate Sector: Optimizing Business Operations**  
- **Document Management:**  
  - Employees can upload project reports, meeting minutes, or client proposals in various formats, unified through Microsoft Fabric.  

- **Role-Based Insights:**  
  - Sales managers view client interactions, revenue trends, and sales forecasts.  
  - HR personnel access employee data, hiring trends, and workforce analytics.  
  - Executives get high-level BI reports to monitor organizational growth and performance.  

- **AI Assistance:**  
  - The chatbot aids employees in finding relevant information, generating summaries, or preparing reports based on role-specific permissions.  

#### **4. Financial Institutions: Secure Data Handling and Insights**  
- **Data Segmentation:**  
  - Customer service representatives access client account details and transaction histories.  
  - Risk analysts review financial data for fraud detection and risk assessment.  

- **Power BI Integration:**  
  - Generates reports for regulatory compliance, risk monitoring, and financial forecasting.  

- **AI Chatbot:**  
  - Enhances customer interactions by providing quick, role-appropriate assistance.  

#### **5. Government Organizations: Secure and Transparent Management**  
- **Policy-Driven Access:**  
  - Sensitive data, such as citizen records, budgets, or policies, is accessible only to authorized personnel.  

- **Medallion Architecture Benefits:**  
  - Provides a single source of truth for managing government operations, ensuring accuracy and compliance.  

- **AI Chatbot and BI Reports:**  
  - Facilitates informed decision-making with real-time analytics and actionable insights.  

#### **6. Cross-Industry Use: Tailored Solutions for Every Need**  
- SPIN is versatile and adaptable to any industry requiring secure, role-specific management, whether it’s logistics, retail, or manufacturing.  
- Its modular design allows organizations to customize features based on their unique workflows and requirements. 

## Core Technologies  

#### **1. Azure and AI Integration**  
- Azure provides the backbone for SPIN’s cloud services and AI infrastructure, enabling secure and efficient operations. 

#### **2. Microsoft Fabric**  
- A unified data platform designed to manage diverse organizational data with principles like single copy, single governance, and seamless scalability. It also supports SPIN’s **medallion architecture** for ingesting, processing, and analyzing data.  

#### **3. Power BI**  
- An interactive data visualization platform integrated with SPIN to generate dynamic, role-based reports. Power BI enhances decision-making with real-time, actionable insights tailored to each user.  

#### **4. Express.js**  
- A lightweight Node.js framework powering SPIN’s backend services, including API endpoints for frontend integration and microservices communication.  

#### **5. Flask**  
- A Python-based framework handling SPIN’s AI and RAG-related services, ensuring high performance for AI-driven functionalities.  

#### **6. PostgreSQL**  
- A reliable and scalable relational database system used for storing and managing SPIN’s structured data, ensuring security and integrity.  

#### **7. Cerbos**  
- A policy engine that acts as the middleware for SPIN, enforcing fine-grained, role-based access control. It ensures that all user actions comply with predefined policies, enhancing security and compliance.  

#### **8. Docker**  
- All SPIN microservices are containerized using Docker, ensuring portability, consistency, and streamlined deployment via **Docker Compose**.  

#### **9. Models**  

- **LLAMA (7b Model):**  
   - Powers SPIN’s role-based RAG pipeline, delivering intelligent and context-aware chatbot responses.  

- **Text-Embedding-3 Large Model:**  
   - Used for generating embeddings during vectorization, enabling efficient indexing and retrieval of data in the RAG workflow.  

#### **10. Next.js**  
- A React-based framework that builds SPIN’s dynamic and performant frontend. Its server-side rendering and API integration enable a seamless user experience.  

#### **11. LangChain and LangSmith:**  
   - **LangChain:** Orchestrates the RAG pipelines by combining Azure Search, vector databases, and SPIN’s AI models.  
   - **LangSmith:** Provides observability and debugging tools for improving the AI workflows, ensuring better performance and user experience.  

## Azure Integrations  

#### **Azure AI Search**  
- Azure AI Search is used to store and retrieve document embeddings generated from the Knowledge Base, enabling contextually relevant and fast retrieval during the RAG process for document validation and compliance checking.

#### **Azure ML Studio**  
- Azure ML Studio is used to host, train, and deploy machine learning models, including large models like LLAMA. It ensures that AI models, such as those used for RAG, are scalable and accessible within the SPIN environment.

#### **Azure OpenAI Studio for Embedding Model**  
- Azure OpenAI Studio powers the creation of text embeddings from uploaded documents. These embeddings are integral to the RAG process, enhancing the ability to generate relevant, context-aware insights during document validation.

#### **Azure Entra ID**  
- Azure Entra ID is used to manage organizational identities and roles, ensuring secure authentication and authorization for users within SPIN. It integrates seamlessly with **Cerbos** for policy-based role access control.

#### **Azure Container Apps**  
- Azure Container Apps is used to host SPIN’s containerized microservices, enabling scalable and efficient management of backend services like AI-driven RAG and document processing.

#### **Microsoft Fabric**  
- Microsoft Fabric is a data management platform that supports SPIN’s medallion architecture, integrating various data sources and providing a unified approach to data governance, processing, and reporting.

#### **Power BI**  
 - Power BI is integrated with SPIN to generate dynamic, role-based BI reports, offering powerful data visualization and insights to assist users in making informed decisions based on their data access.

## System Architecture  

SPIN is built using a **microservices architecture** to ensure scalability, flexibility, and maintainability. The system is composed of various services that communicate with each other, forming a cohesive solution. The architecture is designed to handle the complexities of document management, role-based access, AI integration, and data analytics seamlessly.

### **Microservices Architecture**

<img src="https://raw.githubusercontent.com/t-aswath/mdeditor/refs/heads/main/spin_arch.png" />

- **Cerbos Middleware**  
  - Acts as a policy and role-based access control engine, ensuring that all user actions are validated against predefined policies. Cerbos enforces security and compliance by controlling what users can access and what actions they can perform, based on their roles and permissions.

- **Frontend Systems**  
  - The user interface of SPIN is built using **Next.js**, providing a dynamic and responsive experience. The frontend interacts with various backend services to fetch data, trigger AI processes, and display business intelligence insights based on user roles.

- **AI Services Backend**  
  - The AI backend includes services powered by **Flask** and **Azure Machine Learning Studio**, which handle the processing and serving of AI models, such as the LLAMA 7b model for role-based retrieval-augmented generation (RAG) and the embedding generation for document analysis.

- **Frontend Backend Services**  
  - A set of backend services developed using **Express.js** that handle the API requests from the frontend. These services orchestrate user operations, such as uploading documents, interacting with the AI chatbot, and fetching Power BI reports.

- **Microsoft Fabric Integration**  
  - **Microsoft Fabric** is integrated into the system as the unified data platform. It manages the data pipeline, allowing for data ingestion, transformation, and processing at scale. Fabric ensures seamless integration between various data sources and supports SPIN’s medallion architecture for structured data processing.

### **Medallion Architecture** 

<img src="https://raw.githubusercontent.com/t-aswath/mdeditor/refs/heads/main/Screenshot%20from%202024-12-21%2009-01-18.png" />

The data processing in SPIN follows a **medallion architecture**, which organizes data through three layers: Bronze, Silver, and Gold. Each layer serves a specific purpose in data ingestion, transformation, and reporting.

- **Bronze Layer**  
  - The **Bronze Layer** is the raw data layer where all incoming documents and data are ingested. This layer stores unprocessed data, such as documents uploaded by users, scanned files, and text extracted from various formats. It acts as the foundation for all further data transformations.

- **Silver Layer**  
  - In the **Silver Layer**, the raw data is cleaned, processed, and transformed into structured formats. Here, the documents are indexed, enriched, and embedded, creating a format that is more suitable for querying and analysis. This layer prepares the data for generating meaningful insights and powering BI reports.

- **Gold Layer**  
  - The **Gold Layer** is where the data is fully processed and optimized for reporting and analysis. In this layer, insights are extracted from the data, and the results are stored in a format suitable for Power BI reports, making it ready for business intelligence analysis. The Gold Layer also houses the final version of the document embeddings that are used by the AI services for RAG.


This architecture ensures that SPIN can efficiently handle large-scale data, maintain security through role-based access, and deliver high-performance AI and business intelligence capabilities. The separation of concerns in the microservices architecture, along with the structured data flow in the medallion architecture, provides scalability and flexibility for future enhancements.

# Team Behind SPIN

### Team Name: Bitspace

#### Team Members:

- **Aswath T**: [GitHub Profile](https://github.com/t-aswath)
- **Naveen M P**: [GitHub Profile](https://github.com/navi-prem)
- **Rahul Navneeth**: [GitHub Profile](https://github.com/RahulNavneeth)
- **Surya Prakash**: [GitHub Profile](https://github.com/suryaaprakassh)
- **Valan Tamil Dasan**: [GitHub Profile](https://github.com/Valan-Tamil-Dasan)

# Contribution

We welcome contributions and feedback from the community to enhance our document validation solution. Your insights are invaluable in shaping the future of this project. 

- **Contributions**: We encourage developers to contribute code, documentation, and ideas to improve functionality and usability.
- **Feedback**: Please share your thoughts and experiences to help us identify areas for improvement and feature enhancements.
- **Issue Reporting**: If you encounter any issues, we invite you to raise them through our issue tracker, ensuring that we can address them promptly.

Together, we can create a more robust and effective solution for document validation within the Azure ecosystem.
