const goEndpoint = `http://localhost:9000`
const goEndpointAdmin = `http://localhost:9000/admin`



const qos = (client) => ({
    adminUploadQos: ({ formData }) => client.post(
        goEndpointAdmin + `/qos/upload`, formData,
        {
            headers: {"Content-Type": "multipart/form-data"},
            withCredentials: true
        }
    ),
    adminDeleteQos: ({ id }) => client.delete(
        goEndpointAdmin + `/qos/delete/${id}`, { withCredentials: true }
    ),
    adminGetAllQosList: () => client.get(goEndpointAdmin + `/qos`, { withCredentials: true }),
    adminGetRecapQosCustomer: ({ id }) => client.get(
        goEndpointAdmin + `/qos/${id}`, { withCredentials: true }
    ),

    getRecapFilteredQos: ({ qosParam, isp, city, service, startDate, endDate }) => client.get(
        goEndpoint + `/qos/${qosParam}/${isp}/${city}/${service}/${startDate}/${endDate}`,
        { withCredentials: true }
    )
})

export default qos