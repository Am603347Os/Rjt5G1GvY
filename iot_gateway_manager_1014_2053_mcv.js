// 代码生成时间: 2025-10-14 20:53:48
// Required modules
const d3 = require('d3');

// IoT Gateway Manager class
class IoTGatewayManager {
    constructor() {
        this.gateways = [];
    }

    /**
     * Adds a new gateway to the manager
     * @param {object} gateway - The gateway object to add
     */
    addGateway(gateway) {
        if (!gateway || typeof gateway !== 'object') {
            throw new Error('Invalid gateway provided');
        }
        this.gateways.push(gateway);
        console.log(`Gateway added: ${gateway.id}`);
    }

    /**
     * Removes a gateway by its ID
     * @param {string} id - The ID of the gateway to remove
     */
    removeGateway(id) {
        const index = this.gateways.findIndex(g => g.id === id);
        if (index === -1) {
            throw new Error('Gateway not found');
        }
        this.gateways.splice(index, 1);
        console.log(`Gateway removed: ${id}`);
    }

    /**
     * Updates an existing gateway
     * @param {string} id - The ID of the gateway to update
     * @param {object} updates - The updated properties of the gateway
     */
    updateGateway(id, updates) {
        const gateway = this.findGateway(id);
        if (!gateway) {
            throw new Error('Gateway not found');
        }
        Object.assign(gateway, updates);
        console.log(`Gateway updated: ${id}`);
    }

    /**
     * Finds a gateway by its ID
     * @param {string} id - The ID of the gateway to find
     * @returns {object|null} - The gateway object or null if not found
     */
    findGateway(id) {
        return this.gateways.find(g => g.id === id) || null;
    }

    /**
     * Lists all gateways
     * @returns {array} - An array of gateway objects
     */
    listGateways() {
        return this.gateways;
    }
}

// Example usage
const manager = new IoTGatewayManager();

try {
    manager.addGateway({ id: 'gw1', name: 'Gateway 1', status: 'online' });
    manager.addGateway({ id: 'gw2', name: 'Gateway 2', status: 'offline' });

    console.log(manager.listGateways());

    manager.updateGateway('gw1', { status: 'offline' });

    manager.removeGateway('gw2');
} catch (error) {
    console.error('Error:', error.message);
}