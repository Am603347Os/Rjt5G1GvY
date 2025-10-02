// 代码生成时间: 2025-10-02 18:50:52
 * Features:
 * - Add miners to the pool
 * - Remove miners from the pool
 * - Display current miners in the pool
 * - Update miner data
 * 
 * @author Your Name
 * @version 1.0.0
 */
class MiningPoolManager {
  constructor() {
    this.miners = [];
  }

  /**
   * Adds a miner to the pool.
   * 
   * @param {Object} miner - Miner data to be added.
   * @param {string} miner.name - Name of the miner.
   * @param {string} miner.hashrate - Hashrate of the miner.
   */
  addMiner(miner) {
    if (!miner.name || !miner.hashrate) {
      throw new Error('Miner must have a name and a hashrate.');
    }
    this.miners.push(miner);
    console.log(`Miner added: ${miner.name}`);
  }

  /**
   * Removes a miner from the pool by name.
   * 
   * @param {string} name - Name of the miner to be removed.
   */
  removeMiner(name) {
    const index = this.miners.findIndex(miner => miner.name === name);
    if (index === -1) {
      throw new Error('Miner not found.');
    }
    this.miners.splice(index, 1);
    console.log(`Miner removed: ${name}`);
  }

  /**
   * Updates a miner's hashrate.
   * 
   * @param {string} name - Name of the miner to update.
   * @param {string} newHashrate - New hashrate for the miner.
   */
  updateMinerHashrate(name, newHashrate) {
    const miner = this.miners.find(miner => miner.name === name);
    if (!miner) {
      throw new Error('Miner not found.');
    }
    if (!newHashrate) {
      throw new Error('New hashrate must be provided.');
    }
    miner.hashrate = newHashrate;
    console.log(`Miner updated: ${name}, new hashrate: ${newHashrate}`);
  }

  /**
   * Displays the current list of miners in the pool.
   */
  displayMiners() {
    console.log('Current miners in the pool:');
    this.miners.forEach(miner => {
      console.log(`Name: ${miner.name}, Hashrate: ${miner.hashrate}`);
    });
  }
}

// Usage example:
try {
  const poolManager = new MiningPoolManager();
  poolManager.addMiner({ name: 'Miner1', hashrate: '100H/s' });
  poolManager.addMiner({ name: 'Miner2', hashrate: '200H/s' });
  poolManager.displayMiners();
  poolManager.updateMinerHashrate('Miner1', '150H/s');
  poolManager.displayMiners();
  poolManager.removeMiner('Miner2');
  poolManager.displayMiners();
} catch (error) {
  console.error(error.message);
}
