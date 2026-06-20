/* =========================================
   TEN GRAND NETWORK — SCRIPT
   ========================================= */

// ==================
// DATA
// ==================

const nodes = [
  {
    id: 'tengrand',
    name: 'Ten Grand',
    label: '10\nGRAND',
    initials: '10',
    category: 'YOU',
    connections: 287,
    collaborations: 48,
    joined: '2017',
    description: 'Ten Grand is a creative network hub connecting brands, artists, and makers in the cultural and lifestyle space.',
    website: 'tengrand.co',
    instagram: '@tengrand',
    grad: 'url(#grad-gold)',
    color: '#f5a623',
    glowColor: 'rgba(245,166,35,0.6)',
    filter: 'url(#glow-gold)',
    radius: 48,
    cx: 195,
    cy: 295,
    isCenter: true,
  },
  {
    id: 'laindoe',
    name: 'Lain Doe',
    initials: 'LD',
    category: 'Artist / Creative',
    connections: 142,
    collaborations: 31,
    joined: '2019',
    description: 'Independent artist and creative director with a focus on brand identity, spatial design, and cultural storytelling.',
    website: 'laindoe.com',
    instagram: '@laindoe',
    grad: 'url(#grad-purple)',
    color: '#a259ff',
    glowColor: 'rgba(162,89,255,0.5)',
    filter: 'url(#glow-blue)',
    radius: 34,
    cx: 195,
    cy: 120,
  },
  {
    id: 'ahch',
    name: 'A House Called Hue',
    initials: 'AH',
    category: 'Brand',
    connections: 103,
    collaborations: 25,
    joined: '2018',
    description: 'Color-forward lifestyle brand blending art, apparel, and community. Known for vibrant cultural activations and storytelling through hue.',
    website: 'ahousecalledhue.com',
    instagram: '@ahousecalledhue',
    grad: 'url(#grad-blue)',
    color: '#4f8ef7',
    glowColor: 'rgba(79,142,247,0.5)',
    filter: 'url(#glow-blue)',
    radius: 34,
    cx: 62,
    cy: 200,
  },
  {
    id: 'bravo',
    name: 'Bravo',
    initials: 'B',
    category: 'Creative Agency',
    connections: 87,
    collaborations: 19,
    joined: '2020',
    description: 'Full-service creative agency specializing in brand strategy, digital experiences, and campaign production for cultural brands.',
    website: 'bravo.studio',
    instagram: '@bravoagency',
    grad: 'url(#grad-purple)',
    color: '#a259ff',
    glowColor: 'rgba(162,89,255,0.5)',
    filter: 'url(#glow-blue)',
    radius: 32,
    cx: 328,
    cy: 175,
  },
  {
    id: 'housewolf',
    name: 'House of Wolf',
    initials: 'HW',
    category: 'Brand',
    connections: 67,
    collaborations: 14,
    joined: '2021',
    description: 'Premium streetwear brand rooted in the ethos of the lone wolf — independent, bold, and uncompromising in craft.',
    website: 'houseofwolf.co',
    instagram: '@houseofwolf',
    grad: 'url(#grad-white)',
    color: '#c8d8f0',
    glowColor: 'rgba(200,216,240,0.4)',
    filter: 'url(#glow-blue)',
    radius: 32,
    cx: 62,
    cy: 400,
  },
  {
    id: 'expressitup',
    name: 'Express It Up',
    initials: 'EI',
    category: 'Printing / DTF',
    connections: 92,
    collaborations: 22,
    joined: '2019',
    description: 'On-demand garment and DTF printing powerhouse. Partners with brands to bring designs to life with speed, quality, and precision.',
    website: 'expressitup.com',
    instagram: '@expressitup',
    grad: 'url(#grad-green)',
    color: '#22d67f',
    glowColor: 'rgba(34,214,127,0.5)',
    filter: 'url(#glow-blue)',
    radius: 32,
    cx: 328,
    cy: 385,
  },
  {
    id: 'grandureorbit',
    name: 'Grandure Orbit',
    initials: 'GO',
    category: 'Platform',
    connections: 41,
    collaborations: 8,
    joined: '2023',
    description: 'A next-generation creative platform for discovering, connecting, and collaborating with cultural makers across the globe.',
    website: 'grandureorbit.com',
    instagram: '@grandureorbit',
    grad: 'url(#grad-cyan)',
    color: '#00c8c8',
    glowColor: 'rgba(0,200,200,0.5)',
    filter: 'url(#glow-blue)',
    radius: 32,
    cx: 195,
    cy: 480,
  },
];

const relationships = [
  {
    source: 'tengrand',
    target: 'laindoe',
    connectedSince: '2019',
    relationshipType: 'Creative Partner',
    projectsTogether: 18,
    mutualConnections: 52,
    strength: 'strong',
    notes: 'Ongoing creative direction partnership. Lain leads visual identity across Ten Grand activations.',
  },
  {
    source: 'tengrand',
    target: 'ahch',
    connectedSince: '2018',
    relationshipType: 'Creative Partner',
    projectsTogether: 12,
    mutualConnections: 34,
    strength: 'strong',
    notes: 'Long-standing creative partnership. Collaborated on seasonal drops, pop-ups, and community events.',
  },
  {
    source: 'tengrand',
    target: 'bravo',
    connectedSince: '2020',
    relationshipType: 'Agency Partner',
    projectsTogether: 8,
    mutualConnections: 21,
    strength: 'strong',
    notes: 'Bravo handles campaign production and digital strategy for Ten Grand flagship initiatives.',
  },
  {
    source: 'tengrand',
    target: 'housewolf',
    connectedSince: '2021',
    relationshipType: 'Brand Ally',
    projectsTogether: 5,
    mutualConnections: 19,
    strength: 'medium',
    notes: 'Cross-brand collaboration on limited edition drops and shared community events.',
  },
  {
    source: 'tengrand',
    target: 'expressitup',
    connectedSince: '2019',
    relationshipType: 'Vendor Partner',
    projectsTogether: 22,
    mutualConnections: 28,
    strength: 'strong',
    notes: 'Primary production partner. Express It Up fulfills all apparel printing for Ten Grand releases.',
  },
  {
    source: 'tengrand',
    target: 'grandureorbit',
    connectedSince: '2023',
    relationshipType: 'Platform Partner',
    projectsTogether: 3,
    mutualConnections: 15,
    strength: 'medium',
    notes: 'Early adopter partnership. Ten Grand is a founding member of the Grandure Orbit ecosystem.',
  },
  {
    source: 'laindoe',
    target: 'ahch',
    connectedSince: '2019',
    relationshipType: 'Collaborator',
    projectsTogether: 7,
    mutualConnections: 41,
    strength: 'medium',
    notes: 'Lain has contributed art direction and visual design to several A House Called Hue seasonal campaigns.',
  },
  {
    source: 'ahch',
    target: 'bravo',
    connectedSince: '2020',
    relationshipType: 'Agency Client',
    projectsTogether: 4,
    mutualConnections: 17,
    strength: 'weak',
    notes: 'Bravo produced A House Called Hue’s 2021 lookbook campaign.',
  },
  {
    source: 'housewolf',
    target: 'expressitup',
    connectedSince: '2021',
    relationshipType: 'Vendor',
    projectsTogether: 11,
    mutualConnections: 12,
    strength: 'medium',
    notes: 'Express It Up is House of Wolf’s go-to production partner for apparel runs.',
  },
  {
    source: 'expressitup',
    target: 'grandureorbit',
    connectedSince: '2023',
    relationshipType: 'Network Member',
    projectsTogether: 2,
    mutualConnections: 9,
    strength: 'weak',
    notes: 'Express It Up joined Grandure Orbit to connect with emerging brands needing print services.',
  },
];

// ==================
// HELPERS
// ==================

const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs = {}) {
  const e = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

function getNodeById(id) {
  return nodes.find(n => n.id === id);
}

function getRelationship(aId, bId) {
  return relationships.find(r =>
    (r.source === aId && r.target === bId) ||
    (r.source === bId && r.target === aId)
  );
}

function lineStyle(strength) {
  switch (strength) {
    case 'strong': return { stroke: '#f5a623', strokeWidth: '1.8', dasharray: '' };
    case 'medium': return { stroke: '#4f8ef7', strokeWidth: '1.2', dasharray: '5,3' };
    default:       return { stroke: '#7a94b8', strokeWidth: '0.8', dasharray: '2,4' };
  }
}

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : null;
}

function nodeGradCSS(node) {
  const map = {
    'url(#grad-gold)':   'linear-gradient(135deg, #ffe066, #f5a623)',
    'url(#grad-blue)':   'linear-gradient(135deg, #7eb8ff, #4f8ef7)',
    'url(#grad-purple)': 'linear-gradient(135deg, #c77dff, #a259ff)',
    'url(#grad-green)':  'linear-gradient(135deg, #6effc2, #22d67f)',
    'url(#grad-white)':  'linear-gradient(135deg, #ffffff, #c8d8f0)',
    'url(#grad-cyan)':   'linear-gradient(135deg, #7fffff, #00c8c8)',
  };
  return map[node.grad] || node.color;
}

// ==================
// STARS BACKGROUND
// ==================

function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStars();
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bg = ctx.createRadialGradient(
      canvas.width * 0.4, canvas.height * 0.3, 0,
      canvas.width * 0.5, canvas.height * 0.5, canvas.width
    );
    bg.addColorStop(0, '#0a1128');
    bg.addColorStop(0.5, '#06091a');
    bg.addColorStop(1, '#030508');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 180; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${0.1 + Math.random() * 0.6})`;
      ctx.fill();
    }

    for (let i = 0; i < 12; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = 1.5 + Math.random() * 0.8;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fill();
      const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
      grd.addColorStop(0, 'rgba(200,220,255,0.15)');
      grd.addColorStop(1, 'rgba(200,220,255,0)');
      ctx.beginPath();
      ctx.arc(x, y, r * 5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }
  }

  resize();
  window.addEventListener('resize', resize);
}

// ==================
// PAN / ZOOM STATE
// ==================

let currentZoom = 1;
let panX = 0, panY = 0;

function applyTransform() {
  const t = `translate(${panX} ${panY}) scale(${currentZoom})`;
  document.getElementById('nodesGroup').setAttribute('transform', t);
  document.getElementById('connectionLines').setAttribute('transform', t);
}

function setZoom(z) {
  currentZoom = Math.max(0.4, Math.min(3, z));
  applyTransform();
}

// ==================
// D3 FORCE GRAPH
// ==================

let simulation = null;
let floatTimer = null;

// Starting positions relative to center — simulation begins here then settles
const nodeLayout = {
  tengrand:      { dx: 0,    dy: 0    },
  laindoe:       { dx: 0,    dy: -175 },
  ahch:          { dx: -138, dy: -95  },
  bravo:         { dx: 138,  dy: -120 },
  housewolf:     { dx: -138, dy: 105  },
  expressitup:   { dx: 138,  dy: 93   },
  grandureorbit: { dx: 0,    dy: 185  },
};

function initD3Graph() {
  if (simulation) simulation.stop();
  if (floatTimer) clearInterval(floatTimer);

  const container = document.getElementById('graphContainer');
  const w = container.clientWidth || 390;
  const h = container.clientHeight || 700;
  const svg = document.getElementById('graphSvg');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  const cx = w / 2;
  const cy = h / 2 - 15;

  // Seed node positions near their layout offsets so the initial animation is a gentle settle
  nodes.forEach(n => {
    const off = nodeLayout[n.id];
    n.x = cx + off.dx + (Math.random() - 0.5) * 6;
    n.y = cy + off.dy + (Math.random() - 0.5) * 6;
    n.fx = undefined;
    n.fy = undefined;
    n.vx = 0;
    n.vy = 0;
  });

  // Ten Grand stays pinned at center
  const center = nodes.find(n => n.id === 'tengrand');
  center.fx = cx;
  center.fy = cy;

  // D3-format links that reference our original relationship objects
  const links = relationships.map(r => ({
    source: r.source,
    target: r.target,
    strength: r.strength,
    rel: r,
  }));

  // Build SVG elements once; update positions every simulation tick
  const linesGroup = document.getElementById('connectionLines');
  const nodesGroup = document.getElementById('nodesGroup');
  linesGroup.innerHTML = '';
  nodesGroup.innerHTML = '';

  // Line element references keyed by "source-target"
  const lineElMap = {};
  links.forEach(link => {
    const key = `${link.source}-${link.target}`;
    const style = lineStyle(link.strength);

    const glowLine = el('line', {
      stroke: style.stroke,
      'stroke-width': String(parseFloat(style.strokeWidth) * 4),
      'stroke-opacity': '0.12',
      'stroke-linecap': 'round',
      filter: 'url(#glow-line)',
    });
    if (style.dasharray) glowLine.setAttribute('stroke-dasharray', style.dasharray);

    const mainLine = el('line', {
      stroke: style.stroke,
      'stroke-width': style.strokeWidth,
      'stroke-opacity': '0.7',
      'stroke-linecap': 'round',
    });
    if (style.dasharray) mainLine.setAttribute('stroke-dasharray', style.dasharray);

    // Wide invisible hit area for easy tapping
    const hitLine = el('line', {
      stroke: 'transparent',
      'stroke-width': '24',
    });
    hitLine.style.cursor = 'pointer';
    hitLine.addEventListener('click', e => { e.stopPropagation(); openRelSheet(link.rel); });

    linesGroup.appendChild(glowLine);
    linesGroup.appendChild(mainLine);
    linesGroup.appendChild(hitLine);
    lineElMap[key] = { glowLine, mainLine, hitLine };
  });

  // Node group elements — children use local coords (cx=0, cy=0) so D3 only needs to update the group transform
  const nodeGroupMap = {};

  nodes.forEach(node => {
    const g = el('g', { class: 'node-group' });
    g.style.cursor = 'pointer';

    if (node.isCenter) {
      const orbitR = node.radius + 14;
      g.appendChild(el('circle', {
        cx: 0, cy: 0, r: orbitR,
        fill: 'none',
        stroke: 'url(#ring-gold)',
        'stroke-width': '1',
        'stroke-opacity': '0.5',
        'stroke-dasharray': `${orbitR * 0.4} ${orbitR * 0.2}`,
      }));

      g.appendChild(el('circle', {
        cx: 0, cy: 0, r: node.radius + 6,
        fill: 'none',
        stroke: node.color,
        'stroke-width': '1.5',
        'stroke-opacity': '0.25',
      }));

      const animCircle = el('circle', {
        cx: 0, cy: 0, r: node.radius + 2,
        fill: 'none',
        stroke: node.color,
        'stroke-width': '1',
        'stroke-opacity': '0',
      });
      const animR = document.createElementNS(SVG_NS, 'animate');
      animR.setAttribute('attributeName', 'r');
      animR.setAttribute('values', `${node.radius + 2};${node.radius + 22}`);
      animR.setAttribute('dur', '2.5s');
      animR.setAttribute('repeatCount', 'indefinite');
      const animOp = document.createElementNS(SVG_NS, 'animate');
      animOp.setAttribute('attributeName', 'stroke-opacity');
      animOp.setAttribute('values', '0.4;0');
      animOp.setAttribute('dur', '2.5s');
      animOp.setAttribute('repeatCount', 'indefinite');
      animCircle.appendChild(animR);
      animCircle.appendChild(animOp);
      g.appendChild(animCircle);
    } else {
      g.appendChild(el('circle', {
        cx: 0, cy: 0, r: node.radius + 4,
        fill: 'none',
        stroke: node.color,
        'stroke-width': '0.8',
        'stroke-opacity': '0.3',
        'stroke-dasharray': '3,4',
      }));
    }

    // Ambient glow halo
    g.appendChild(el('circle', {
      cx: 0, cy: 0, r: node.radius + 3,
      fill: node.color,
      'fill-opacity': '0.08',
      filter: 'url(#glow-gold)',
    }));

    // Main filled circle
    g.appendChild(el('circle', {
      cx: 0, cy: 0, r: node.radius,
      fill: node.grad,
      filter: node.filter,
      class: 'node-circle',
    }));

    // Specular highlight
    g.appendChild(el('circle', {
      cx: -node.radius * 0.25,
      cy: -node.radius * 0.3,
      r: node.radius * 0.35,
      fill: 'white',
      'fill-opacity': '0.12',
    }));

    // Label text
    if (node.isCenter) {
      const t1 = el('text', {
        x: 0, y: -6,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: '#fff',
        'font-size': '14',
        'font-weight': '900',
        'font-family': "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
        'letter-spacing': '0.1',
      });
      t1.textContent = '10';
      const t2 = el('text', {
        x: 0, y: 10,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: 'rgba(255,255,255,0.8)',
        'font-size': '9',
        'font-weight': '700',
        'font-family': "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
        'letter-spacing': '2',
      });
      t2.textContent = 'GRAND';
      g.appendChild(t1);
      g.appendChild(t2);
    } else {
      const t = el('text', {
        x: 0, y: 0,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: 'white',
        'font-size': '12',
        'font-weight': '800',
        'font-family': "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      });
      t.textContent = node.initials;
      g.appendChild(t);
    }

    // Name / category labels below node
    const nameOff = node.radius + 14;

    const nameText = el('text', {
      x: 0, y: nameOff + (node.isCenter ? 6 : 5),
      'text-anchor': 'middle',
      fill: node.isCenter ? node.color : '#e8eeff',
      'font-size': node.isCenter ? '11' : '9.5',
      'font-weight': node.isCenter ? '700' : '600',
      'font-family': "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
    });
    nameText.textContent = node.isCenter ? 'TEN GRAND' : node.name;
    g.appendChild(nameText);

    const catText = el('text', {
      x: 0, y: nameOff + (node.isCenter ? 19 : 17),
      'text-anchor': 'middle',
      fill: node.isCenter ? 'rgba(255,200,50,0.6)' : 'rgba(180,195,230,0.45)',
      'font-size': '8',
      'font-weight': '500',
      'font-family': "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      'letter-spacing': '0.1',
    });
    catText.textContent = node.category.toUpperCase();
    g.appendChild(catText);

    if (!node.isCenter) {
      const badgeY = nameOff + 29;
      g.appendChild(el('rect', {
        x: -14, y: badgeY - 8,
        width: '28', height: '14',
        rx: '7',
        fill: 'rgba(255,255,255,0.05)',
        stroke: 'rgba(255,255,255,0.1)',
        'stroke-width': '0.5',
      }));
      const countText = el('text', {
        x: 0, y: badgeY + 1,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: 'rgba(200,220,255,0.5)',
        'font-size': '8',
        'font-weight': '600',
        'font-family': "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      });
      countText.textContent = node.connections;
      g.appendChild(countText);
    }

    // Set initial group position before first tick
    g.setAttribute('transform', `translate(${node.x}, ${node.y})`);

    nodesGroup.appendChild(g);
    nodeGroupMap[node.id] = g;
  });

  // ---- D3 simulation ----
  simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links)
      .id(d => d.id)
      .distance(d => {
        const toCenter = d.source.id === 'tengrand' || d.target.id === 'tengrand';
        if (!toCenter) return 210;
        return d.strength === 'strong' ? 162 : d.strength === 'medium' ? 180 : 198;
      })
      .strength(0.45)
    )
    .force('charge', d3.forceManyBody().strength(-300))
    .force('collision', d3.forceCollide().radius(d => d.radius + 22).strength(0.85))
    .alphaDecay(0.013)
    .velocityDecay(0.45)
    .on('tick', () => {
      // Move line endpoints
      links.forEach(link => {
        const src = link.source;
        const tgt = link.target;
        const key = `${src.id}-${tgt.id}`;
        const els = lineElMap[key];
        if (!els) return;
        els.glowLine.setAttribute('x1', src.x); els.glowLine.setAttribute('y1', src.y);
        els.glowLine.setAttribute('x2', tgt.x); els.glowLine.setAttribute('y2', tgt.y);
        els.mainLine.setAttribute('x1', src.x); els.mainLine.setAttribute('y1', src.y);
        els.mainLine.setAttribute('x2', tgt.x); els.mainLine.setAttribute('y2', tgt.y);
        els.hitLine.setAttribute('x1', src.x);  els.hitLine.setAttribute('y1', src.y);
        els.hitLine.setAttribute('x2', tgt.x);  els.hitLine.setAttribute('y2', tgt.y);
      });

      // Move node groups
      nodes.forEach(n => {
        const g = nodeGroupMap[n.id];
        if (g) g.setAttribute('transform', `translate(${n.x}, ${n.y})`);
      });
    });

  // ---- D3 drag — distinguishes tap (open sheet) from drag (move node) ----
  let dragMoved = false;

  const nodeDrag = d3.drag()
    .on('start', (event, d) => {
      dragMoved = false;
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      nodeGroupMap[d.id].classList.add('is-dragging');
    })
    .on('drag', (event, d) => {
      dragMoved = true;
      // Convert client pointer → SVG coordinate space → simulation space
      const svgEl = document.getElementById('graphSvg');
      const pt = svgEl.createSVGPoint();
      const src = event.sourceEvent;
      if (src.touches && src.touches.length > 0) {
        pt.x = src.touches[0].clientX;
        pt.y = src.touches[0].clientY;
      } else {
        pt.x = src.clientX || 0;
        pt.y = src.clientY || 0;
      }
      const ctm = svgEl.getScreenCTM();
      if (ctm) {
        const p = pt.matrixTransform(ctm.inverse());
        d.fx = (p.x - panX) / currentZoom;
        d.fy = (p.y - panY) / currentZoom;
      }
    })
    .on('end', (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      nodeGroupMap[d.id].classList.remove('is-dragging');
      if (d.id !== 'tengrand') {
        d.fx = null;
        d.fy = null;
      }
      if (!dragMoved) openNodeSheet(d);
    });

  nodes.forEach(node => {
    d3.select(nodeGroupMap[node.id]).datum(node).call(nodeDrag);
  });

  // ---- Periodic gentle float — tiny velocity kicks keep the network alive when idle ----
  floatTimer = setInterval(() => {
    if (simulation.alpha() < 0.012) {
      nodes.forEach(n => {
        if (n.id === 'tengrand') return;
        n.vx += (Math.random() - 0.5) * 0.7;
        n.vy += (Math.random() - 0.5) * 0.7;
      });
      simulation.alpha(0.055).restart();
    }
  }, 3500);

  // ---- Pan / zoom touch & mouse ----
  initPanZoom();
}

function initPanZoom() {
  const svg = document.getElementById('graphSvg');
  let isPanning = false;
  let panSx = 0, panSy = 0;
  let panOx = 0, panOy = 0;
  let lastPinchDist = 0;

  svg.addEventListener('touchstart', e => {
    if (e.target.closest('.node-group')) return;
    if (e.touches.length === 2) {
      lastPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else if (e.touches.length === 1) {
      isPanning = true;
      panSx = e.touches[0].clientX; panSy = e.touches[0].clientY;
      panOx = panX; panOy = panY;
    }
  }, { passive: true });

  svg.addEventListener('touchmove', e => {
    if (e.target.closest('.node-group') && e.touches.length === 1) return;
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (lastPinchDist > 0) setZoom(currentZoom * (dist / lastPinchDist));
      lastPinchDist = dist;
    } else if (e.touches.length === 1 && isPanning) {
      panX = panOx + (e.touches[0].clientX - panSx) / currentZoom;
      panY = panOy + (e.touches[0].clientY - panSy) / currentZoom;
      applyTransform();
    }
  }, { passive: true });

  svg.addEventListener('touchend', () => { isPanning = false; });

  svg.addEventListener('wheel', e => {
    e.preventDefault();
    setZoom(currentZoom * (e.deltaY > 0 ? 0.9 : 1.1));
  }, { passive: false });

  svg.addEventListener('mousedown', e => {
    if (e.target.closest('.node-group')) return;
    isPanning = true;
    panSx = e.clientX; panSy = e.clientY;
    panOx = panX; panOy = panY;
    svg.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', e => {
    if (!isPanning) return;
    panX = panOx + (e.clientX - panSx) / currentZoom;
    panY = panOy + (e.clientY - panSy) / currentZoom;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    isPanning = false;
    svg.style.cursor = 'default';
  });
}

// ==================
// NODE SHEET
// ==================

function openNodeSheet(node) {
  const content = document.getElementById('nodeSheetContent');

  content.innerHTML = `
    <div class="sheet-node-header">
      <div class="sheet-node-orb" style="background:${nodeGradCSS(node)}; box-shadow: 0 0 24px ${node.color}60;">
        ${node.initials}
      </div>
      <div class="sheet-node-title">
        <span class="sheet-node-name">${node.name}</span>
        <span class="sheet-node-category">${node.category}</span>
      </div>
      ${node.isCenter ? '<span class="sheet-node-badge">YOU</span>' : ''}
    </div>

    <div class="sheet-stats">
      <div class="sheet-stat">
        <span class="sheet-stat-value">${node.connections}</span>
        <span class="sheet-stat-label">CONNECTIONS</span>
      </div>
      <div class="sheet-stat">
        <span class="sheet-stat-value">${node.collaborations}</span>
        <span class="sheet-stat-label">COLLABS</span>
      </div>
      <div class="sheet-stat">
        <span class="sheet-stat-value">${node.joined}</span>
        <span class="sheet-stat-label">JOINED</span>
      </div>
    </div>

    <p class="sheet-description">${node.description}</p>

    <div class="sheet-meta">
      <div class="sheet-meta-row">
        <span class="sheet-meta-label">WEBSITE</span>
        <span class="sheet-meta-value">${node.website}</span>
      </div>
      <div class="sheet-meta-row">
        <span class="sheet-meta-label">INSTAGRAM</span>
        <span class="sheet-meta-value">${node.instagram}</span>
      </div>
    </div>

    <div class="sheet-actions">
      <button class="sheet-btn primary" onclick="closeNodeSheet()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8h12M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Website
      </button>
      <button class="sheet-btn" onclick="closeNodeSheet()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="12" cy="4" r="1" fill="currentColor"/>
        </svg>
        Instagram
      </button>
      <button class="sheet-btn" onclick="closeNodeSheet()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 10a2 2 0 0 1-2 2H4l-2 2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        Message
      </button>
    </div>
  `;

  document.getElementById('nodeSheet').classList.add('open');
  document.getElementById('nodeSheetOverlay').classList.add('active');
}

function closeNodeSheet() {
  document.getElementById('nodeSheet').classList.remove('open');
  document.getElementById('nodeSheetOverlay').classList.remove('active');
}

// ==================
// RELATIONSHIP SHEET
// ==================

function openRelSheet(rel) {
  const src = getNodeById(rel.source);
  const tgt = getNodeById(rel.target);
  const content = document.getElementById('relSheetContent');

  content.innerHTML = `
    <div class="sheet-rel-header">
      <div class="sheet-rel-parties">
        <div class="rel-party">
          <div class="rel-orb" style="background:${nodeGradCSS(src)}; box-shadow: 0 0 16px ${src.color}60;">
            ${src.initials}
          </div>
          <span class="rel-name">${src.name}</span>
        </div>
        <div class="rel-connector">↔</div>
        <div class="rel-party">
          <div class="rel-orb" style="background:${nodeGradCSS(tgt)}; box-shadow: 0 0 16px ${tgt.color}60;">
            ${tgt.initials}
          </div>
          <span class="rel-name">${tgt.name}</span>
        </div>
      </div>
      <div class="sheet-rel-type">${rel.relationshipType}</div>
    </div>

    <div class="sheet-rel-stats">
      <div class="sheet-rel-stat">
        <span class="sheet-rel-stat-value">${rel.connectedSince}</span>
        <span class="sheet-rel-stat-label">CONNECTED SINCE</span>
      </div>
      <div class="sheet-rel-stat">
        <span class="sheet-rel-stat-value">${rel.projectsTogether}</span>
        <span class="sheet-rel-stat-label">PROJECTS TOGETHER</span>
      </div>
      <div class="sheet-rel-stat">
        <span class="sheet-rel-stat-value">${rel.mutualConnections}</span>
        <span class="sheet-rel-stat-label">MUTUAL CONNECTIONS</span>
      </div>
      <div class="sheet-rel-stat">
        <span class="sheet-rel-stat-value" style="text-transform:capitalize;">${rel.strength}</span>
        <span class="sheet-rel-stat-label">BOND STRENGTH</span>
      </div>
    </div>

    <div class="sheet-meta" style="margin-bottom:16px;">
      <div class="sheet-meta-row">
        <span class="sheet-meta-label">RELATIONSHIP TYPE</span>
        <span class="sheet-meta-value">${rel.relationshipType}</span>
      </div>
    </div>

    <div class="sheet-notes">${rel.notes}</div>
  `;

  document.getElementById('relSheet').classList.add('open');
  document.getElementById('relSheetOverlay').classList.add('active');
}

function closeRelSheet() {
  document.getElementById('relSheet').classList.remove('open');
  document.getElementById('relSheetOverlay').classList.remove('active');
}

// ==================
// DRAWER
// ==================

function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('active');
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('active');
}

// ==================
// BOTTOM NAV
// ==================

function switchTab(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const screen = document.getElementById(`screen-${screenId}`);
  const tab = document.querySelector(`.nav-tab[data-screen="${screenId}"]`);
  if (screen) screen.classList.add('active');
  if (tab) tab.classList.add('active');
}

// ==================
// INIT
// ==================

document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initD3Graph();

  window.addEventListener('resize', () => {
    initD3Graph();
  });

  document.getElementById('menuBtn').addEventListener('click', openDrawer);
  document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);
  document.getElementById('nodeSheetOverlay').addEventListener('click', closeNodeSheet);
  document.getElementById('relSheetOverlay').addEventListener('click', closeRelSheet);

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.screen));
  });

  document.getElementById('graphSearchBtn').addEventListener('click', () => switchTab('search'));

  document.getElementById('notifBtn').addEventListener('click', () => {
    alert('Notifications coming soon.');
  });
});
